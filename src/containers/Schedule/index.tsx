import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store/rootReducer';
import Loading from '../../components/Common/Loading';
import { showTicketInputForm } from '../TicketInput/actions';
import MonthlyCalendar from './MonthlyCalendar';
import UpcomingTickets from './UpcomingTickets';
import { getAllTicketsRequest, getUpcomingTicketsRequest } from './actions';
import { S } from './styles';

export interface TticketModifyData {
  _id?: string;
  poster?: string;
  category?: 'musical' | 'theater' | 'music-theater' | 'etc' | 'default';
  title?: string;
  schedule: string;
  place?: string;
  seat?: string;
  price?: number;
  casting?: string[];
  discount_type?: string;
  memo?: string;
  isModify: boolean;
}

function Schedule() {
  const dispatch = useDispatch();
  const { loading: calendarLoading, calendarTickets } = useSelector(
    (state: rootState) => state.schedule.calendarDatas,
  );
  const { loading: upcomingLoading, upcomingTickets } = useSelector(
    (state: rootState) => state.schedule.upcomingDatas,
  );

  useEffect(() => {
    dispatch(getAllTicketsRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUpcomingTicketsRequest());
  }, [dispatch]);

  const openTicketForm = (ticketData: TticketModifyData) => {
    dispatch(showTicketInputForm(ticketData));
  };

  if (calendarLoading || upcomingLoading) return <Loading />;

  return (
    <>
      <section css={S.section}>
        <h2 className="a11y-hidden">관람 일정</h2>
        <MonthlyCalendar
          calendarTickets={calendarTickets}
          openTicketForm={openTicketForm}
        />
        <UpcomingTickets upcomingTickets={upcomingTickets} />
      </section>
    </>
  );
}

export default Schedule;
