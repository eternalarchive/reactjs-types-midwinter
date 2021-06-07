import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { S } from './styles';

interface BasicInputProps {
  type: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
}

function BasicInput({ label, required, register, ...rest }: BasicInputProps) {
  return (
    <>
      <label className="a11y-hidden">{label}</label>
      <input {...register(label, { required })} css={S.textInput} {...rest} />
    </>
  );
}

BasicInput.defaultProps = {
  type: 'text',
  placeholder: '정보를 입력해주세요',
  required: false,
};

export default BasicInput;
