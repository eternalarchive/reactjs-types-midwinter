import React from 'react';
import UpcomingTicket from '../../../../components/DataDisplay/UpcomingTicket';
import { TticketData } from '../../saga';
import { S } from './styles';

interface TicketBlockProps {
  tickets: TticketData[];
  title: string;
}

function TicketBlock({ tickets, title }: TicketBlockProps) {
  return (
    <div css={S.dayContainer}>
      <p css={S.title}>{title}</p>
      <ul css={S.ticketsBlock}>
        {tickets.map((ticket: TticketData) => (
          <UpcomingTicket ticket={ticket} key={ticket._id} />
        ))}
      </ul>
    </div>
  );
}

export default TicketBlock;
