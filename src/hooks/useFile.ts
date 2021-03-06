import { useMemo } from 'react';
import { FileLike } from '../data';
import { useFileSubscribe } from './useFileSubscribe';

/** The output of this hook is an object representing a file. */
interface FileHook<F> {
  /** The entire file class. */
  file: F;
  /** The file id. */
  id: string;
  /** The file originalName. */
  originalName: string;
  /** The file extension. */
  extension: string;
  /** The file name. */
  name?: string;
  /** The resolved file thumbnail or undefined until it is resolved. */
  thumbnail?: string;
  /** The resolved file fileObj or undefined until it is resolved. */
  fileObj?: Blob;
  /** The resolved file documentObj or undefined until it is resolved. */
  documentObj?: CoreControls.Document;
}

/**
 * This hook converts a file class with async values into a React-friendly hook
 * with async values set to undefined until they are fetched.
 * @param file The file to convert to react observable values.
 * @param throttle The timeout if unfetched memo promise.
 */
export function useFile<F extends FileLike>(file: F, throttle?: number): FileHook<F> {
  const [name] = useFileSubscribe(file, f => f.name, 'onnamechange', { throttle });
  const [thumbnail] = useFileSubscribe(file, f => f.thumbnail, 'onthumbnailchange', { throttle });
  const [fileObj] = useFileSubscribe(file, f => f.fileObj, 'onfileobjchange', { throttle });
  const [documentObj] = useFileSubscribe(file, f => f.documentObj, 'ondocumentobjchange', { throttle });

  const fileValue = useMemo<FileHook<F>>(
    () => ({
      file,
      id: file.id,
      originalName: file.originalName,
      extension: file.extension,
      name,
      thumbnail,
      fileObj,
      documentObj,
    }),
    [file, name, documentObj, fileObj, thumbnail],
  );

  return fileValue;
}
