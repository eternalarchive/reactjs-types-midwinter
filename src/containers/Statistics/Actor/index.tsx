import React, { useState, useEffect } from 'react';
import GrayLineButton from '../../../components/Buttons/GrayLineButton';
import BasicBarChart from '../../../components/Charts/BasicBarChart';
import BlueTextBox from '../../../components/DataDisplay/BlueTextBox';
import EmptyBox from '../../../components/DataDisplay/EmptyBox';
import TopInfo from '../../../components/DataDisplay/TopInfo';
import { Iactor } from '../reducer';
import { S } from './styles';

interface ActorProps {
  data: Iactor[] | [];
}

function Actor({ data }: ActorProps) {
  const [chartData, setChartData] = useState<Iactor[] | []>([]);
  const [tableData, setTableData] = useState<Iactor[] | []>([]);
  const [maxActor, setMaxActor] = useState<string>('');
  const [maxCount, setMaxCount] = useState<number>(0);
  const [page, setPage] = useState<number>(10);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    if (data.length === 0) return setIsEmpty(true);
    const sortedData = [...data].sort((a, b) => b.count - a.count);
    setChartData(sortedData.slice(0, 10));
    setMaxCount(sortedData[0].count);
    setMaxActor(sortedData[0].actor);
  }, [data]);

  useEffect(() => {
    if (data.length === 0) return;
    const sortedData = [...data].sort((a, b) => b.count - a.count);
    setTableData(sortedData.slice(0, page));
  }, [data, page]);

  const morePage = () => {
    if (data.length > page) setPage(page + 10);
  };

  if (isEmpty) return <EmptyBox />;

  return (
    <section css={S.section}>
      <h3 className="a11y-hidden">배우별 통계</h3>
      <TopInfo
        firstTitle="총 관람 배우 수"
        firstContent={`${data.length || 0}명`}
        secondTitle="가장 많이 본 배우"
        secondContent={`${maxActor}(${maxCount}회)`}
      />
      <BlueTextBox>차트에는 최대 상위 10명의 배우까지 표시됩니다</BlueTextBox>
      <BasicBarChart data={chartData} />
      <ul css={S.allList}>
        <li css={S.listItem}>
          <p>배우</p>
          <p>관람 횟수</p>
        </li>
        {tableData.map((actor: Iactor) => (
          <li key={actor.actor} css={S.listItem}>
            <p>{actor.actor}</p>
            <p>{actor.count}회</p>
          </li>
        ))}
      </ul>
      {data.length > page && (
        <GrayLineButton onClick={morePage} css={S.button}>
          더보기
        </GrayLineButton>
      )}
    </section>
  );
}

export default Actor;
