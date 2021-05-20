import React, { useState, useEffect } from 'react';
import GrayLineButton from '../../../components/Buttons/GrayLineButton';
import BasicBarChart from '../../../components/Charts/BasicBarChart';
import BlueTextBox from '../../../components/DataDisplay/BlueTextBox';
import EmptyBox from '../../../components/DataDisplay/EmptyBox';
import TopInfo from '../../../components/DataDisplay/TopInfo';
import { Tactor } from '../reducer';
import { S } from './styles';

interface ActorProps {
  data: Tactor[] | null;
}

function Actor({ data }: ActorProps) {
  const [chartData, setChartData] = useState<Tactor[] | []>([]);
  const [tableData, setTableData] = useState<Tactor[] | []>([]);
  const [maxActor, setMaxActor] = useState<string>('');
  const [maxCount, setMaxCount] = useState<number>(0);
  const [page, setPage] = useState<number>(10);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const newData = [...data].sort((a, b) => b.count - a.count);
    setChartData(newData.slice(0, 10));
    setMaxCount(newData[0].count);
    setMaxActor(newData[0].actor);
  }, [data]);

  useEffect(() => {
    if (!data || data.length === 0) return;
    const newData = [...data].sort((a, b) => b.count - a.count);
    setTableData(newData.slice(0, page));
  }, [data, page]);

  const morePage = () => {
    if (!data || data.length === 0) return;
    if (data.length > page) {
      setPage(page + 10);
    }
  };

  return (
    <section css={S.section}>
      <h3 className="a11y-hidden">배우별 통계</h3>
      <TopInfo
        firstTitle="총 관람 배우 수"
        firstContent={`${data?.length || 0}명`}
        secondTitle="가장 많이 본 배우"
        secondContent={`${maxActor}(${maxCount}회)`}
      />
      {data?.length !== 0 ? (
        <>
          <BlueTextBox text="차트에는 최대 상위 10명의 배우까지 표시됩니다" />
          <BasicBarChart data={chartData} />
          <ul css={S.allList}>
            <li css={S.listItem}>
              <p>배우</p>
              <p>관람 횟수</p>
            </li>
            {data &&
              tableData.map((actor: { actor: string; count: number }) => (
                <li key={actor.actor} css={S.listItem}>
                  <p>{actor.actor}</p>
                  <p>{actor.count}회</p>
                </li>
              ))}
          </ul>
          {data && data.length > page && (
            <GrayLineButton handleClick={morePage} css={S.button}>
              더보기
            </GrayLineButton>
          )}
        </>
      ) : (
        <EmptyBox />
      )}
    </section>
  );
}

export default Actor;
