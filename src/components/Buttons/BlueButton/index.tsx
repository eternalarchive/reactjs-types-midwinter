import React from 'react';
import { S } from './styles';

interface BlueButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function BlueButton({ children, ...rest }: BlueButtonProps) {
  return (
    <button css={S.button} {...rest}>
      {children}
    </button>
  );
}

BlueButton.defaultProps = {
  children: '버튼',
};

export default BlueButton;
