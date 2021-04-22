import React from 'react';
import dayjs from 'dayjs';
import { TticketData } from '../../../containers/Calendar/saga';
import { CATEGORY } from '../../../containers/Tickets/constants';
import { S } from './styles';

interface TicketProps {
  ticket: TticketData;
  changeTicketInfo: (ticket: TticketData) => void;
}

function Ticket({ ticket, changeTicketInfo }: TicketProps) {
  return (
    <div
      css={S.ticketItem(ticket.poster)}
      onClick={() => changeTicketInfo(ticket)}
    >
      <span css={S.category}>{CATEGORY[ticket.category]}</span>
      <h3 css={S.title}>{ticket.title}</h3>
      {ticket.casting && (
        <div css={S.casting}>
          {ticket.casting?.map(person => (
            <span key={person} css={S.person}>
              {person}
            </span>
          ))}
        </div>
      )}
      <p css={S.schedule}>
        {dayjs(ticket.schedule).format('YYYY년 M월 D일 A h:mm')}
      </p>
      <p css={S.place}>{ticket.place}</p>
      <p css={S.seat}>{ticket.seat}</p>
      <p css={S.price}>
        {ticket.price && `${ticket.price.toLocaleString('ko-KR')}원`}
        <span>{ticket.discount_type && ` (${ticket.discount_type} 적용)`}</span>
      </p>
      <p css={S.memo}>{ticket.memo}</p>
    </div>
  );
}

export default Ticket;
