import React from 'react';
import './Loading.scss';
import { ILoading } from './Loading.type';

function Loading({ isLoaded }: ILoading) {
  return (
    <>
      {!isLoaded && (
        <div className="loading" data-testid="loading">
          <div className="fountain fountain_1"></div>
          <div className="fountain fountain_2"></div>
          <div className="fountain fountain_3"></div>
          <div className="fountain fountain_4"></div>
          <div className="fountain fountain_5"></div>
          <div className="fountain fountain_6"></div>
          <div className="fountain fountain_7"></div>
          <div className="fountain fountain_8"></div>
        </div>
      )}
    </>
  );
}

export default Loading;
