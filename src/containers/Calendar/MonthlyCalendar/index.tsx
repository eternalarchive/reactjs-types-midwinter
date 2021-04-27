import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { SimpleRightArrow, SimpleLeftArrow } from '../../../components/Svgs';
import { rootState } from '../../../store/rootReducer';
import { TticketModifyData } from '..';
import CalendarItem from './CalendarItem';
import { S } from './styles';

interface MonthlyCalendarProps {
  openTicketForm: (ticketData: TticketModifyData) => void;
}

function MonthlyCalendar({ openTicketForm }: MonthlyCalendarProps) {
  const [date, setDate] = useState(dayjs());
  const calendarTickets = useSelector(
    (state: rootState) => state.calendar.calendarDatas.calendarTickets,
  );

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
