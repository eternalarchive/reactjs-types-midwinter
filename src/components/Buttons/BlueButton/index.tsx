import React from 'react';
import { S } from './styles';

interface BlueButtonProps {
  handleClick: (data?: boolean) => void;
  children: React.ReactNode;
}

function BlueButton({ handleClick, children, ...rest }: BlueButtonProps) {
  return (
    <button css={S.button} onClick={() => handleClick()} {...rest}>
      {children}
    </button>
  );
}

BlueButton.defaultProps = {
  children: '버튼',
};

export default BlueButton;
