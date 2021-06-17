import React from 'react';
import EmptyBox from '../../../components/DataDisplay/EmptyBox';
import Ticket from '../../../components/DataDisplay/Ticket';
import { IticketData } from '../../Schedule/saga';
import { S } from '../styles';

interface TicketListProps {
  tickets: IticketData[] | [];
  changeTicketInfo: (ticket: IticketData) => void;
}

function TicketList({ tickets, changeTicketInfo }: TicketListProps) {
  return (
    <>
      {tickets?.length !== 0 ? (
        <div css={S.ticket}>
          {tickets?.map((ticket: IticketData) => (
            <Ticket
              key={ticket._id}
              ticket={ticket}
              changeTicketInfo={changeTicketInfo}
            />
          ))}
        </div>
      ) : (
        <EmptyBox />
      )}
    </>
  );
}

export default TicketList;
