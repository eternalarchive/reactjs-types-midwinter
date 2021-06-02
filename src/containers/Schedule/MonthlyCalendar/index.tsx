import React, { useState } from 'react';
import dayjs from 'dayjs';
import SimpleRightArrow from '../../../components/Svgs/SimpleRightArrow';
import SimpleLeftArrow from '../../../components/Svgs/SimpleLeftArrow';
import { TticketModifyData } from '../index';
import { TticketData } from '../saga';
import CalendarItem from './CalendarItem';
import { S } from './styles';

interface MonthlyCalendarProps {
  calendarTickets: TticketData[];
  openTicketForm: (ticketData: TticketModifyData) => void;
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
          <button onClick={() => changeDate(date.subtract(1, 'month'))}>
            <SimpleLeftArrow />
          </button>
          <span css={S.line} />
          <button onClick={() => changeDate(date.add(1, 'month'))}>
            <SimpleRightArrow />
          </button>
        </div>
      </div>
      <div css={S.body}>
        <div className="row">
          <div className="box indicator">
            <span className="text week">SUN</span>
          </div>
          <div className="box indicator">
            <span className="text week">MON</span>
          </div>
          <div className="box indicator">
            <span className="text week">TUE</span>
          </div>
          <div className="box indicator">
            <span className="text week">WED</span>
          </div>
          <div className="box indicator">
            <span className="text week">THU</span>
          </div>
          <div className="box indicator">
            <span className="text week">FRI</span>
          </div>
          <div className="box indicator">
            <span className="text week">SAT</span>
          </div>
        </div>
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
