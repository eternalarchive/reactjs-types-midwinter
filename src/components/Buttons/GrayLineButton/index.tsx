import React from 'react';
import { S } from './styles';

interface GrayLineButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function GrayLineButton({ children, ...rest }: GrayLineButtonProps) {
  return (
    <button css={S.button} {...rest}>
      {children}
    </button>
  );
}

GrayLineButton.defaultProps = {
  children: '버튼',
};

export default GrayLineButton;
