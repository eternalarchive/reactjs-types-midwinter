import React, { useState } from 'react';
import dayjs from 'dayjs';
import SimpleRightArrow from '../../../components/Svgs/SimpleRightArrow';
import SimpleLeftArrow from '../../../components/Svgs/SimpleLeftArrow';
import { IticketModifyData } from '../index';
import { IticketData } from '../saga';
import CalendarItem from './CalendarItem';
import { S } from './styles';

interface MonthlyCalendarProps {
  calendarTickets: IticketData[];
  openTicketForm: (ticketData: IticketModifyData) => void;
}

function MonthlyCalendar({
  calendarTickets,
  openTicketForm,
}: MonthlyCalendarProps) {
  const [date, setDate] = useState(dayjs());

  const changeDate = (newDate: React.SetStateAction<dayjs.Dayjs>) => {
    setDate(newDate);
  };

  return (
    <div css={S.calendar}>
      <div css={S.head}>
        <div css={S.dateInfo}>
          <p css={S.year}>{date.format('YYYY')}</p>
          <h3 css={S.title}>{date.format('MMMM')}</h3>
        </div>
        <div css={S.buttonBox}>
          <button
            onClick={() => changeDate(date.subtract(1, 'month'))}
            aria-label={`${date.subtract(1, 'month').format('MMMM')}로 이동`}
          >
            <SimpleLeftArrow />
          </button>
          <span css={S.line} />
          <button
            onClick={() => changeDate(date.add(1, 'month'))}
            aria-label={`${date.add(1, 'month').format('MMMM')}로 이동`}
          >
            <SimpleRightArrow />
          </button>
        </div>
      </div>
      <div css={S.body}>
        <ul className="row">
          <li className="box indicator">
            <span className="text week">SUN</span>
          </li>
          <li className="box indicator">
            <span className="text week">MON</span>
          </li>
          <li className="box indicator">
            <span className="text week">TUE</span>
          </li>
          <li className="box indicator">
            <span className="text week">WED</span>
          </li>
          <li className="box indicator">
            <span className="text week">THU</span>
          </li>
          <li className="box indicator">
            <span className="text week">FRI</span>
          </li>
          <li className="box indicator">
            <span className="text week">SAT</span>
          </li>
        </ul>
        <CalendarItem
          date={date}
          calendarTickets={calendarTickets}
          openTicketForm={openTicketForm}
        />
      </div>
    </div>
  );
}

export default MonthlyCalendar;
