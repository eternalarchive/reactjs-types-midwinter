import React from 'react';
import dayjs from 'dayjs';
import { TticketData } from '../../saga';
import { CATEGORY } from './constants';
import { S } from './styles';

interface UpcomingTicketProps {
  ticket: TticketData;
}

function UpcomingTicket({ ticket }: UpcomingTicketProps) {
  return (
    <li css={S.ticketArea}>
      <div css={S.infoBox}>
        <p css={S.category}>{CATEGORY[ticket.category]}</p>
        <p css={S.title}>{ticket.title}</p>
        <p css={S.schedule}>{`${dayjs(ticket.schedule).format(
          'YYYY년 MM월 DD일 A h:mm',
        )} - ${ticket.place || '관람장소를 업데이트해주세요'}`}</p>
      </div>
      <img css={S.poster} src={ticket.poster} alt="포스터" />
    </li>
  );
}

export default UpcomingTicket;
