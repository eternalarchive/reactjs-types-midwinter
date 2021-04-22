import React from 'react';
import { S } from './styles';

interface BasicInputProps {
  type?: string;
  placeholder: string;
}

function BasicInput(props: BasicInputProps) {
  return <input css={S.textInput} {...props} />;
}

BasicInput.defaultProps = {
  type: 'text',
  placeholder: '정보를 입력해주세요',
};

export default BasicInput;
