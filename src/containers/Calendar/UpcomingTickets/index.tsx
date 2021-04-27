import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UpcomingTicket from './UpcomingTicket';
import { rootState } from '../../../store/rootReducer';
import { getUpcomingTicketsRequest } from '../actions';
import { TticketData } from '../saga';
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
        <h3 css={S.sectionTitle}>다가오는 일정</h3>
        <div css={S.dayContainer}>
          <p css={S.date}>{`오늘(${dayjs().format('D')}일)`}</p>
          <ul css={S.ticketsBlock}>
            {upcomingTickets?.today.map((ticket: TticketData) => (
              <UpcomingTicket ticket={ticket} key={ticket._id} />
            ))}
          </ul>
        </div>
        <div css={S.dayContainer}>
          <p css={S.date}>관람 예정</p>
          <ul css={S.ticketsBlock}>
            {upcomingTickets?.others.map((ticket: TticketData) => (
              <UpcomingTicket ticket={ticket} key={ticket._id} />
            ))}
          </ul>
        </div>
        <Link to="tickets">
          <button css={S.viewAll}>View all</button>
        </Link>
      </section>
    </>
  );
}

export default UpcomingTickets;
