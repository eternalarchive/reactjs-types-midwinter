import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { S } from './styles';

function Loading() {
  return (
    <div css={S.loading}>
      <BeatLoader color="#131313" />
    </div>
  );
}

export default Loading;
