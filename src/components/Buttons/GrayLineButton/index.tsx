import React from 'react';
import { S } from './styles';

interface GrayLineButtonProps {
  handleClick?: () => void;
  children: React.ReactNode;
}

function GrayLineButton({
  handleClick,
  children,
  ...rest
}: GrayLineButtonProps) {
  return (
    <button onClick={handleClick} css={S.button} {...rest}>
      {children}
    </button>
  );
}

GrayLineButton.defaultProps = {
  children: '버튼',
};

export default GrayLineButton;
