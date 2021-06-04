import React from 'react';
import CloseIcon from '../../Svgs/CloseIcon';
import { S } from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

function CloseButton(props: CloseButtonProps) {
  return (
    <button css={S.button} {...props} aria-label="닫기">
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
