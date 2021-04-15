import React from 'react';
import dayjs from 'dayjs';
import { TticketDatas } from '../../../containers/Calendar/saga';
import { TupcomingTickets } from '../../../containers/Calendar/reducer';
import { CATEGORY } from './constants';
import { S } from './styles';

interface UpcomingTicketProps {
  upcomingTickets: null | TupcomingTickets;
}

function UpcomingTicket({ upcomingTickets }: UpcomingTicketProps) {
  return (
    <>
      <div css={S.dayContainer}>
        <p css={S.date}>{`오늘(${dayjs().format('D')}일)`}</p>
        <ul css={S.ticketsBlock}>
          {upcomingTickets &&
            upcomingTickets.today.map((ticket: TticketDatas) => (
              <li css={S.ticketArea} key={`${ticket.title} ${ticket.schedule}`}>
                <div css={S.infoBox}>
                  <p css={S.category}>{CATEGORY[ticket.category]}</p>
                  <p css={S.title}>{ticket.title}</p>
                  <p css={S.schedule}>{`${dayjs(ticket.schedule).format(
                    'YYYY년 MM월 DD일 A h:mm',
                  )} - ${ticket.place || '관람장소를 업데이트해주세요'}`}</p>
                </div>
                <img css={S.poster} src={ticket.poster} alt="포스터" />
              </li>
            ))}
        </ul>
      </div>
      <div css={S.dayContainer}>
        <p css={S.date}>관람 예정</p>
        <ul css={S.ticketsBlock}>
          {upcomingTickets &&
            upcomingTickets.others.map((ticket: TticketDatas) => (
              <li css={S.ticketArea} key={`${ticket.title} ${ticket.schedule}`}>
                <div css={S.infoBox}>
                  <p css={S.category}>{CATEGORY[ticket.category]}</p>
                  <p css={S.title}>{ticket.title}</p>
                  <p css={S.schedule}>{`${dayjs(ticket.schedule).format(
                    'YYYY년 MM월 DD일 A h:mm',
                  )} - ${ticket.place || '관람장소를 업데이트해주세요'}`}</p>
                </div>
                <img css={S.poster} src={ticket.poster} alt="포스터" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default UpcomingTicket;
