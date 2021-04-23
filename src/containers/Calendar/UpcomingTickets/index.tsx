import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UpcomingTicket from '../../../components/DataDisplay/UpcomingTicket';
import { rootState } from '../../../store/rootReducer';
import { getUpcomingTicketsRequest } from '../actions';
import { S } from './styles';

function UpcomingTickets() {
  const dispatch = useDispatch();
  const upcomingTickets = useSelector(
    (state: rootState) => state.calendar.upcomingDatas.upcomingTickets,
  );

  useEffect(() => {
    dispatch(getUpcomingTicketsRequest());
  }, [dispatch]);

  return (
    <>
      <section css={S.section}>
        <h2 css={S.sectionTitle}>다가오는 일정</h2>
        <UpcomingTicket upcomingTickets={upcomingTickets} />
        <Link to="tickets">
          <button css={S.viewAll}>View all</button>
        </Link>
        <Link to="tickets">
          <button css={S.more}>더보기</button>
        </Link>
      </section>
    </>
  );
}

export default UpcomingTickets;
