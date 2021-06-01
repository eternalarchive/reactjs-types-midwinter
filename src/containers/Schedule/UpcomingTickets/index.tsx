import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import EmptyBox from '../../../components/DataDisplay/EmptyBox';
import { TticketData } from '../saga';
import { TupcomingTickets } from '../reducer';
import UpcomingTicket from './UpcomingTicket';
import { S } from './styles';

interface UpcomingTicketsProps {
  upcomingTickets: TupcomingTickets | null;
}

function UpcomingTickets({ upcomingTickets }: UpcomingTicketsProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (
      upcomingTickets?.today.length === 0 &&
      upcomingTickets?.others.length === 0
    ) {
      setIsEmpty(true);
    }
  }, [upcomingTickets]);

  return (
    <>
      <section css={S.section}>
        <h3 css={S.sectionTitle}>다가오는 일정</h3>
        {isEmpty ? (
          <EmptyBox />
        ) : (
          <>
            {upcomingTickets?.today.length !== 0 && (
              <div css={S.dayContainer}>
                <p css={S.date}>{`오늘(${dayjs().format('D')}일)`}</p>
                <ul css={S.ticketsBlock}>
                  {upcomingTickets?.today.map((ticket: TticketData) => (
                    <UpcomingTicket ticket={ticket} key={ticket._id} />
                  ))}
                </ul>
              </div>
            )}
            {upcomingTickets?.others.length !== 0 && (
              <div css={S.dayContainer}>
                <p css={S.date}>관람 예정</p>
                <ul css={S.ticketsBlock}>
                  {upcomingTickets?.others.map((ticket: TticketData) => (
                    <UpcomingTicket ticket={ticket} key={ticket._id} />
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        <Link to="tickets">
          <button css={S.viewAll}>View all</button>
        </Link>
      </section>
    </>
  );
}

export default UpcomingTickets;
