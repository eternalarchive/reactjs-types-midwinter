import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import LineBarChart from '../../../components/Charts/LineBarChart';
import TopInfo from '../../../components/DataDisplay/TopInfo';
import BlueTextBox from '../../../components/DataDisplay/BlueTextBox';
import { Iview } from '../reducer';
import { S } from './styles';

interface ViewProps {
  data: Iview[];
}

function View({ data }: ViewProps) {
  const [viewCount, setViewCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    setViewCount(data.reduce((pre, cur) => pre + cur.count, 0));
    setTotalPrice(data.reduce((pre, cur) => pre + cur.total, 0));
  }, [data]);

  return (
    <section css={S.section}>
      <h3 className="a11y-hidden">월별 관람 횟수, 사용 금액 통계</h3>
      <TopInfo
        firstTitle="2021 관람 횟수"
        firstContent={`${viewCount}회`}
        secondTitle="2021 사용 금액"
        secondContent={`${totalPrice.toLocaleString('ko-KR')}원`}
      />
      <div>
        <BlueTextBox>2021년 관람 기록</BlueTextBox>
        <LineBarChart data={data} />
      </div>
      <ul css={S.allList}>
        <li css={S.listItem}>
          <p>월</p>
          <p>금액</p>
          <p>관람 횟수</p>
        </li>
        {data.map((view: Iview) => (
          <li key={view.month} css={S.listItem}>
            <p>{dayjs(view.month).format('M')}월</p>
            <p>{view.count}회</p>
            <p>{view.total.toLocaleString('ko-KR')}원</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default View;
