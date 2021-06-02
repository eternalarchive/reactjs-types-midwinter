import React from 'react';
import UpcomingTicket from '../../../../components/DataDisplay/UpcomingTicket';
import { IticketData } from '../../saga';
import { S } from './styles';

interface IicketBlockProps {
  tickets: IticketData[];
  title: string;
}

function TicketBlock({ tickets, title }: IicketBlockProps) {
  return (
    <div css={S.dayContainer}>
      <p css={S.title}>{title}</p>
      <ul css={S.ticketsBlock}>
        {tickets.map((ticket: IticketData) => (
          <UpcomingTicket ticket={ticket} key={ticket._id} />
        ))}
      </ul>
    </div>
  );
}

export default TicketBlock;
