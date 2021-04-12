import React, { useState } from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { SimpleRightArrow, SimpleLeftArrow } from '../../../components/Svgs';
import { S } from './styles';

interface MonthlyCalendarProps {
  openTicketForm: (schedule: string) => void;
}

function MonthlyCalendar({ openTicketForm }: MonthlyCalendarProps) {
  const [date, setDate] = useState(dayjs());

  const changeDate = (newDate: React.SetStateAction<dayjs.Dayjs>) => {
    setDate(newDate);
  };

  const generate = () => {
    const today = dayjs();
    dayjs.extend(weekOfYear);
    const startWeek = date.startOf('month').week();
    const endWeek =
      date.endOf('month').week() === 1 ? 53 : date.endOf('month').week();

    const calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              const current = date
                .week(week)
                .startOf('week')
                .add(n + i, 'day');
              const isToday =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'today'
                  : '';
              const isSelected =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              const isGrayed =
                current.format('MM') === date.format('MM') ? '' : 'grayed';
              return (
                <div
                  className={`box ${isSelected} ${isGrayed} ${isToday}`}
                  key={current.format('YYYYMMDD')}
                  onClick={() => openTicketForm(current.format())}
                >
                  <span className={`text`}>{`${current.format('D')}\n${
                    isToday && 'TODAY'
                  }`}</span>
                </div>
              );
            })}
        </div>,
      );
    }
    return calendar;
  };

  return (
    <div css={S.calendar}>
      <div css={S.head}>
        <p className="year">{date.format('YYYY')}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 className="title">{date.format('MMMM')}</h3>
          <button onClick={() => changeDate(date.subtract(1, 'month'))}>
            <SimpleLeftArrow />
          </button>
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
        {generate()}
      </div>
    </div>
  );
}

export default MonthlyCalendar;
