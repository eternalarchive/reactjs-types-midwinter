import React from 'react';
import dayjs from 'dayjs';
import LineBarChart from '../../../components/Charts/LineBarChart';
import TopInfo from '../../../components/DataDisplay/TopInfo';
import BlueTextBox from '../../../components/DataDisplay/BlueTextBox';
import { Tview } from '../reducer';
import { S } from './styles';

interface ViewProps {
  data: Tview[] | null;
}

function View({ data }: ViewProps) {
  return (
    <section css={S.section}>
      <h3 className="a11y-hidden">월별 관람 횟수, 사용 금액 통계</h3>
      <TopInfo
        firstTitle="2021 관람 횟수"
        firstContent={`${
          data?.reduce((pre, cur) => pre + cur.count, 0) || 0
        }회`}
        secondTitle="2021 사용 금액"
        secondContent={`${
          data
            ?.reduce((pre, cur) => pre + cur.total, 0)
            .toLocaleString('ko-KR') || 0
        }원`}
      />
      <div>
        <BlueTextBox text={'2021년 관람 기록'} />
        <LineBarChart data={data} />
      </div>
      <ul css={S.allList}>
        <li css={S.listItem}>
          <p>월</p>
          <p>금액</p>
          <p>관람 횟수</p>
        </li>
        {data?.map((view: { month: string; count: number; total: number }) => (
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
