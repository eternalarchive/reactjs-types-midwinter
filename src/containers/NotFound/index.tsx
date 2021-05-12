import React, { useEffect, useState } from 'react';
import BlueButton from '../../components/Buttons/BlueButton';
import history from '../../utils/history';
import { S } from './styles';

function NotFound() {
  const [count, setCount] = useState(5);

  const gohome = () => history.push('/');

  useEffect(() => {
    const findWay = setTimeout(() => {
      if (count === 0) {
        history.push('/');
        setCount(5);
      }
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(findWay);
  }, [count]);

  return (
    <section css={S.section}>
      <h2 className="a11y-hidden">페이지를 찾을 수 없습니다</h2>
      <span role="img" aria-label="인공위성" css={S.emoji}>
        🛰
      </span>
      <p css={S.notFound}>404</p>
      <p css={S.notFoundText}>STAY!!!</p>
      <p css={S.findPage}>{`길찾는 중... ${count}초`}</p>
      <BlueButton handleClick={gohome} css={S.gohome}>
        빠른길 찾기
      </BlueButton>
    </section>
  );
}

export default NotFound;
