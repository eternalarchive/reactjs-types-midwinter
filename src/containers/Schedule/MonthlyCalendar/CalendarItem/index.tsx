import React from 'react';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { IticketData } from '../../saga';
import { IticketModifyData } from '../../index';

interface CalendarItemProps {
  date: dayjs.Dayjs;
  calendarTickets: IticketData[];
  openTicketForm: (ticketData: IticketModifyData) => void;
}

function CalendarItem({
  date,
  calendarTickets,
  openTicketForm,
}: CalendarItemProps) {
  const renderPoster = (current: dayjs.Dayjs) => {
    if (calendarTickets.length === 0) {
      return (
        <span
          className={`text`}
          onClick={() =>
            openTicketForm({
              schedule: current.format('YYYY-MM-DDT20:00'),
              isModify: false,
            })
          }
          tabIndex={0}
        >{`${current.format('DD')}`}</span>
      );
    }

    const todayTickets = calendarTickets.filter(
      (data: { schedule: string }) =>
        dayjs(data.schedule).format('YYYYMMDD') === current.format('YYYYMMDD'),
    );

    return (
      <>
        {todayTickets.length !== 0 ? (
          todayTickets.map((ticket: IticketData) => (
            <img
              key={`${ticket._id}`}
              src={ticket.poster}
              alt={`${ticket.title} ${ticket.schedule}`}
              onClick={() => openTicketForm({ ...ticket, isModify: true })}
              tabIndex={0}
            />
          ))
        ) : (
          <span
            className={`text`}
            onClick={() =>
              openTicketForm({
                schedule: current.format('YYYY-MM-DDT20:00'),
                isModify: false,
              })
            }
            tabIndex={0}
          >{`${current.format('DD')}`}</span>
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
        <ul className="row" key={week}>
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
                <li
                  className={`box ${isGrayed} ${isToday}`}
                  key={current.format('YYYYMMDD')}
                >
                  {renderPoster(current)}
                </li>
              );
            })}
        </ul>,
      );
    }
    return calendar;
  };

  return <>{generate()}</>;
}

export default CalendarItem;
