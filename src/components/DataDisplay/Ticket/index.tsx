import React from 'react';
import dayjs from 'dayjs';
import { IticketData } from '../../../containers/Schedule/saga';
import { CATEGORY } from '../../../containers/Tickets/constants';
import { S } from './styles';

interface IicketProps {
  ticket: IticketData;
  changeTicketInfo: (ticket: IticketData) => void;
}

function Ticket({ ticket, changeTicketInfo }: IicketProps) {
  return (
    <div
      css={S.ticketItem(ticket.poster)}
      onClick={() => changeTicketInfo(ticket)}
      role="button"
      tabIndex={0}
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
