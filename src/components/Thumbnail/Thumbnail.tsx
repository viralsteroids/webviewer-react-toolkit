import classnames from 'classnames';
import React, { forwardRef } from 'react';
import { File } from '../../hooks/useFile';
import test from '../../icons/pdf-preview.png';
import ClickableDiv, { ClickableDivProps } from '../ClickableDiv';
import Spinner from '../Spinner';

export interface ThumbnailProps extends ClickableDivProps {
  /**
   * The file to display the thumbnail from.
   */
  file: File;
  /**
   * Optional label. Will fallback to file name if not provided.
   */
  label?: string;
  /**
   * Display thumbnail with selected props.
   */
  selected?: boolean;
}

export const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(
  ({ file, label, selected, className, ...divProps }, ref) => {
    const thumbnailClass = classnames(
      'ui__base ui__thumbnail',
      {
        ['ui__thumbnail--selected']: selected,
      },
      className,
    );

    return (
      <ClickableDiv {...divProps} className={thumbnailClass} ref={ref} noFocusStyle>
        <div className="ui__thumbnail__controls">Controls</div>
        <div className="ui__thumbnail__image">{file.thumbnail ? <img src={test} alt={file.name} /> : <Spinner />}</div>
        <div className="ui__thumbnail__label">{label || file.name}</div>
      </ClickableDiv>
    );
  },
);
