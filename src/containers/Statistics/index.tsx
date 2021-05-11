import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store/rootReducer';
import Loading from '../../components/Common/Loading';
import { getStatisticsActorRequest, getStatisticsViewRequest } from './actions';
import Actor from './Actor';
import View from './View';
import { S } from './styles';

function Statistics() {
  const dispatch = useDispatch();
  const { loading, actorCounts } = useSelector(
    (state: rootState) => state.statistics.actorDatas,
  );
  const viewCounts = useSelector(
    (state: rootState) => state.statistics.viewDatas.viewCounts,
  );

  const [clickedTab, setClickedTab] = useState<'actor' | 'view'>('actor');

  useEffect(() => {
    dispatch(getStatisticsActorRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStatisticsViewRequest(2021));
  }, [dispatch]);

  const changeTab = (tab: 'actor' | 'view') => {
    setClickedTab(tab);
  };

  if (loading) return <Loading />;

  return (
    <section css={S.section}>
      <h2 className="a11y-hidden">통계</h2>
      <ul css={S.tab}>
        <li
          css={S.tabItem(clickedTab === 'actor')}
          role="button"
          onClick={() => changeTab('actor')}
        >
          배우
        </li>
        <li
          css={S.tabItem(clickedTab === 'view')}
          role="button"
          onClick={() => changeTab('view')}
        >
          회차, 금액
        </li>
      </ul>
      {clickedTab === 'actor' ? (
        <Actor data={actorCounts} />
      ) : (
        <View data={viewCounts} />
      )}
    </section>
  );
}

export default Statistics;
