import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store/rootReducer';
import { getStatisticsActorRequest, getStatisticsViewRequest } from './actions';
import Actor from './Actor';
import View from './View';
import { S } from './styles';

function Statistics() {
  const dispatch = useDispatch();
  const actorCounts = useSelector(
    (state: rootState) => state.statistics.actorDatas.actorCounts,
  );
  const viewCounts = useSelector(
    (state: rootState) => state.statistics.viewDatas.viewCounts,
  );

  const [clickedTab, setClickedTab] = useState<string>('actor');

  useEffect(() => {
    dispatch(getStatisticsActorRequest());
    dispatch(getStatisticsViewRequest(2021));
  }, [dispatch]);

  const changeTab = (tab: string) => {
    setClickedTab(tab);
  };

  return (
    <div>
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
    </div>
  );
}

export default Statistics;
