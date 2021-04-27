import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showTicketInputForm } from '../TicketInput/actions';
import MonthlyCalendar from './MonthlyCalendar';
import UpcomingTickets from './UpcomingTickets';
import { getAllTicketsRequest } from './actions';
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
  isModify?: boolean;
}

function Calendar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTicketsRequest());
  }, [dispatch]);

  const openTicketForm = (ticketData: TticketModifyData) => {
    dispatch(showTicketInputForm(ticketData));
  };

  return (
    <>
      <section css={S.section}>
        <h2 className="a11y-hidden">관람 일정</h2>
        <MonthlyCalendar openTicketForm={openTicketForm} />
        <UpcomingTickets />
      </section>
    </>
  );
}

export default Calendar;
