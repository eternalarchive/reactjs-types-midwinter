import React from 'react';
import { CloseIcon } from '../../Svgs';
import { S } from './styles';

interface CloseButtonProps {
  onClick: () => void;
}

function CloseButton(props: CloseButtonProps) {
  return (
    <button css={S.button} {...props}>
      <CloseIcon />
    </button>
  );
}

export default CloseButton;
