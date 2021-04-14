import React, { useState } from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { useSelector } from 'react-redux';
import { SimpleRightArrow, SimpleLeftArrow } from '../../../components/Svgs';
import { rootState } from '../../../store/rootReducer';
import { S } from './styles';

interface MonthlyCalendarProps {
  openTicketForm: (schedule: string) => void;
}

function MonthlyCalendar({ openTicketForm }: MonthlyCalendarProps) {
  const [date, setDate] = useState(dayjs());
  const calendarDatas = useSelector(
    (state: rootState) => state.calendar.calendarDatas,
  );

  const changeDate = (newDate: React.SetStateAction<dayjs.Dayjs>) => {
    setDate(newDate);
  };

  const renderPoster = (current: dayjs.Dayjs, isToday: string) => {
    if (!calendarDatas) {
      return (
        <span className={`text`}>{`${current.format('D')}\n${
          isToday && 'TODAY'
        }`}</span>
      );
    }

    const ticketDatas = calendarDatas.filter(
      (data: { schedule: string }) =>
        dayjs(data.schedule).format('YYYYMMDD') === current.format('YYYYMMDD'),
    );
    return (
      <>
        {ticketDatas.length !== 0 ? (
          ticketDatas.map(
            (ticket: { title: string; schedule: string; poster: string }) => (
              <img
                key={`${ticket.title} ${ticket.schedule}`}
                src={ticket.poster}
                alt={`${ticket.title} ${ticket.schedule}`}
              />
            ),
          )
        ) : (
          <span className={`text`}>{`${current.format('D')}\n${
            isToday && 'TODAY'
          }`}</span>
        )}
      </>
    );
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
              const isGrayed =
                current.format('MM') === date.format('MM') ? '' : 'grayed';
              return (
                <div
                  className={`box ${isGrayed} ${isToday}`}
                  key={current.format('YYYYMMDD')}
                  onClick={() => openTicketForm(current.format())}
                >
                  {renderPoster(current, isToday)}
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
