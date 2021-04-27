import React from 'react';
import { S } from './styles';

interface BlueButtonProps {
  text: string;
  handleClick: (data?: boolean) => void;
}

function BlueButton({ text, handleClick, ...rest }: BlueButtonProps) {
  return (
    <button css={S.button} onClick={() => handleClick()} {...rest}>
      {text}
    </button>
  );
}

BlueButton.defaultProps = {
  text: '버튼',
};

export default BlueButton;
