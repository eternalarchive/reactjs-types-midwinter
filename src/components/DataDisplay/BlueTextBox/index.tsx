import React from 'react';
import { S } from './styles';

interface BlueTextBoxProps {
  children: React.ReactNode;
}

function BlueTextBox({ children, ...rest }: BlueTextBoxProps) {
  return (
    <p css={S.noticeText} {...rest}>
      <span role="img" aria-label="rainbow">
        🌈
      </span>{' '}
      {children}
    </p>
  );
}

export default BlueTextBox;
