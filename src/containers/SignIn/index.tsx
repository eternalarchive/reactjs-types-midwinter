import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store/rootReducer';
import { postSignInRequest } from './actions';
import { TsignInInfo } from './saga';
import { S } from './styles';

function SignIn() {
  const dispatch = useDispatch();
  const error = useSelector(
    (state: rootState) => state.signIn.signInInfo.error,
  );
  const [errorMsg, setErrorMsg] = useState<string>('');
  const { register, handleSubmit } = useForm<TsignInInfo>();

  useEffect(() => {
    if (error === 401) {
      setErrorMsg('아이디 또는 비밀번호를 확인해주세요.');
    } else {
      setErrorMsg('잠시 후 다시 시도해주세요.');
    }
  }, [error]);

  const onSubmit = (data: TsignInInfo) => {
    dispatch(postSignInRequest(data));
  };

  return (
    <section>
      <h2 css={S.h2}>로그인</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          css={S.textInput}
          {...register('email', { required: true })}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          css={S.textInput}
          {...register('password', { required: true })}
        />
        {error && <p css={S.errorMsg}>{errorMsg}</p>}
        <button css={S.loginButton}>로그인</button>
      </form>
    </section>
  );
}

export default SignIn;
