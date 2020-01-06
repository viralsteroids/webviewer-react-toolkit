import { getExtension } from '../utils/fileUtils';
import { getStringId } from '../utils/idUtils';
import { RequireAtLeastOne } from '../utils/typeUtils';
import blobToDocument from '../webviewer/blobToDocument';
import documentToBlob from '../webviewer/documentToBlob';
import getRotatedDocument from '../webviewer/getRotatedDocument';
import getThumbnail from '../webviewer/getThumbnail';
import { FileEvent, FileEventListener, FileEventListenersObj, FileEventType } from './fileEvent';
import { FuturableOrLazy } from './futurable';
import MemoizedPromise from './memoizedPromise';

interface FileDetailsBase {
  /** File name. */
  name: string;
  /** The original name of the file */
  originalName?: string;
  /** File extension. For example, `'pdf'`. */
  extension?: string;
  /** File object, or function to get it. One of `fileObj` or `documentObj` must be given. */
  fileObj?: FuturableOrLazy<Blob>;
  /** Document object, or function to get it. One of `fileObj` or `documentObj` must be given. */
  documentObj?: FuturableOrLazy<CoreControls.Document>;
  /** Thumbnail data URL string, or function to get it. */
  thumbnail?: FuturableOrLazy<string>;
}

/** The input object provided to the File constructor. */
export type FileDetails = RequireAtLeastOne<FileDetailsBase, 'fileObj' | 'documentObj'>;

export class File {
  private _id: string;
  private _name: string;
  private _originalName: string;
  private _extension: string;
  private _fileObj: MemoizedPromise<Blob>;
  private _documentObj: MemoizedPromise<CoreControls.Document>;
  private _thumbnail: MemoizedPromise<string>;
  private _eventListeners: FileEventListenersObj;

  constructor({ name, originalName, extension, fileObj, documentObj, thumbnail }: FileDetails) {
    if (!fileObj && !documentObj) throw new Error('One of `fileObj` or `documentObj` is required');

    this._id = getStringId('File');
    this._name = name;
    this._originalName = originalName || name;
    this._extension = extension || getExtension(name);

    this._documentObj = new MemoizedPromise(documentObj ?? this._generateDocumentObj);
    this._fileObj = new MemoizedPromise(fileObj ?? this._generateFileObj);
    this._thumbnail = new MemoizedPromise(thumbnail ?? this._generateThumbnail);

    this._eventListeners = {};
  }

  /**
   * The name of the file.
   */
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._dispatchEvent(FileEventType.NameChange, () => {
      this._name = name;
    });
  }

  /**
   * A unique ID generated for the file.
   */
  get id() {
    return this._id;
  }

  /**
   * The original name of the file (will fallback to the name if not provided
   * during initialization).
   */
  get originalName() {
    return this._originalName;
  }

  /**
   * The extension of the file (for example `'pdf'`).
   */
  get extension() {
    return this._extension;
  }

  /**
   * A promise getter for the thumbnail.
   */
  get thumbnail() {
    return this._thumbnail;
  }

  /**
   * A promise getter for the fileObj.
   */
  get fileObj() {
    return this._fileObj;
  }

  /**
   * A promise getter for the documentObj.
   */
  get documentObj() {
    return this._documentObj;
  }

  /**
   * Set the thumbnail or give a futurable or getter.
   * @param thumbnail The thumbnail, promise, or getter for the thumbnail.
   */
  setThumbnail(thumbnail?: FuturableOrLazy<string>) {
    this._dispatchEvent(FileEventType.ThumbnailChange, () => {
      this._thumbnail = new MemoizedPromise(thumbnail ?? this._generateThumbnail);
    });
  }

  /**
   * Set the fileObj or give a futurable or getter.
   * @param fileObj The fileObj, promise, or getter for the fileObj.
   */
  setFileObj(fileObj?: FuturableOrLazy<Blob>) {
    this._dispatchEvent(FileEventType.FileObjChange, () => {
      this._fileObj = new MemoizedPromise(fileObj ?? this._generateFileObj);
      // Only update documentObj if fileObj was given, not generated.
      if (fileObj) this.setDocumentObj();
    });
  }

  /**
   * Set the documentObj or give a futurable or getter.
   * @param documentObj The documentObj, promise, or getter for the documentObj.
   * @param stopPropagation Prevent updates to _fileObj and thumbnail.
   */
  setDocumentObj(documentObj?: FuturableOrLazy<CoreControls.Document>) {
    this._dispatchEvent(FileEventType.DocumentObjChange, () => {
      this._documentObj = new MemoizedPromise(documentObj ?? this._generateDocumentObj);
      // Only update fileObj if documentObj was given, not generated.
      if (documentObj) this.setFileObj();
      this.setThumbnail();
    });
  }

  /**
   * Rotate the file 90 degrees clockwise.
   */
  rotate() {
    this._dispatchEvent(FileEventType.Rotate, () => {
      this.setDocumentObj(getRotatedDocument(this.documentObj.get()));
    });
  }

  /**
   * Appends an event listener for events whose type attribute value is type.
   * The callback argument sets the callback that will be invoked when the event
   * is dispatched.
   * @param type The event type that will invoke the listener.
   * @param listener The listener function that will be invoked.
   */
  addEventListener(type: FileEventType, listener: FileEventListener) {
    const eventListeners = this._eventListeners[type] ?? (this._eventListeners[type] = []);
    if (!eventListeners.includes(listener)) eventListeners.push(listener);
  }

  /**
   * Removes the event listener in target's event listener list with the same
   * type and callback.
   * @param type The event type that the listener is registered for.
   * @param listener The listener to remove.
   */
  removeEventListener(type: FileEventType, listener: FileEventListener) {
    const eventListeners = this._eventListeners[type];
    if (!eventListeners) return;
    const index = eventListeners.indexOf(listener);
    if (index > -1) eventListeners.splice(index, 1);
  }

  /**
   * Removes all event listeners for a given type, or if no type is given, will
   * remove all event listeners across every type.
   * @param type Optional. The event type to remove all listeners from.
   */
  removeAllEventListeners(type?: FileEventType) {
    if (typeof type === 'string') {
      this._eventListeners[type] = [];
    } else if (type === undefined) {
      this._eventListeners = {};
    }
  }

  /** Dispatch an event for the file. */
  private _dispatchEvent(type: FileEventType, eventDefault?: Function) {
    new FileEvent(type, this, { eventDefault, listeners: this._eventListeners });
  }

  /** Generate a thumbnail from document object. */
  private _generateThumbnail() {
    return getThumbnail(this.documentObj.get());
  }

  /** Generate a file object from document object. */
  private _generateFileObj() {
    return documentToBlob(this.documentObj.get());
  }

  /** Generate a document object from file object and extension. */
  private _generateDocumentObj() {
    return blobToDocument(this.fileObj.get(), this.extension);
  }
}