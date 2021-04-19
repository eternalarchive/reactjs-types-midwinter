import React, { useState, useEffect } from 'react';
import BasicBarChart from '../../../components/Charts/BasicBarChart';
import BlueTextBox from '../../../components/DataDisplay/BlueTextBox';
import TopInfo from '../../../components/DataDisplay/TopInfo';
import { Tactor } from '../reducer';
import { S } from './styles';

interface ActorProps {
  data: Tactor[] | null;
}

function Actor({ data }: ActorProps) {
  const [chartData, setChartData] = useState<Tactor[] | []>([]);
  const [maxActor, setMaxActor] = useState<string>('');
  const [maxCount, setMaxCount] = useState<number>(0);

  useEffect(() => {
    if (!data) return;
    const newData = [...data];
    newData.sort((a, b) => b.count - a.count);
    const filterCount = newData[10].count;
    setChartData(
      data.filter((actor, index) => actor.count >= filterCount && index < 10),
    );
  }, [data]);

  useEffect(() => {
    if (!data) return;
    setMaxCount(
      Math.max(...data.map((actor: { count: number }) => actor.count), 0),
    );
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (maxCount === 0) return;
    setMaxActor(
      data.filter((actor: { count: number }) => actor.count === maxCount)[0]
        .actor,
    );
  }, [data, maxCount]);

  return (
    <section css={S.section}>
      <h2 className="a11y-hidden">배우별 통계</h2>
      <TopInfo
        firstTitle="총 관람 배우 수"
        firstContent={`${data?.length || 0}명`}
        secondTitle="가장 많이 본 배우"
        secondContent={`${maxActor}(${maxCount}회)`}
      />
      <div>
        <BlueTextBox text="최대 상위 10명의 배우까지 표시됩니다" />
        <BasicBarChart data={chartData} />
      </div>
      <ul css={S.allList}>
        <li css={S.listItem}>
          <p>배우</p>
          <p>관람 횟수</p>
        </li>
        {data?.map((actor: { actor: string; count: number }) => (
          <li key={actor.actor} css={S.listItem}>
            <p>{actor.actor}</p>
            <p>{actor.count}회</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Actor;
