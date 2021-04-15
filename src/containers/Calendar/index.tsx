import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { showTicketInputForm } from '../TicketInput/actions';
import MonthlyCalendar from './MonthlyCalendar';
import UpcomingTickets from './UpcomingTickets';
import { getAllTicketsRequest } from './actions';
import { S } from './styles';

function Calendar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTicketsRequest());
  }, [dispatch]);

  const openTicketForm = (schedule: string) => {
    dispatch(showTicketInputForm(schedule));
  };

  return (
    <>
      <section css={S.section}>
        <h2 className="a11y-hidden">관람 일정 달력</h2>
        <MonthlyCalendar openTicketForm={openTicketForm} />
        <button
          css={S.addButton}
          onClick={() => openTicketForm(dayjs().format())}
        >
          티켓 추가
        </button>
      </section>
      <section css={S.section}>
        <UpcomingTickets />
      </section>
    </>
  );
}

export default Calendar;
