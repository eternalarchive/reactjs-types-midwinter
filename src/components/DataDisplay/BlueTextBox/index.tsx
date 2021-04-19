import React from 'react';
import { S } from './styles';

interface BlueTextBoxProps {
  text: string;
}

function BlueTextBox({ text }: BlueTextBoxProps) {
  return (
    <p css={S.noticeText}>
      <span role="img" aria-label="rainbow">
        🌈
      </span>{' '}
      {text}
    </p>
  );
}

export default BlueTextBox;
