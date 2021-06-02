import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import EmptyBox from '../../../components/DataDisplay/EmptyBox';
import { IupcomingTickets } from '../reducer';
import TicketBlock from './TicketBlock';
import { S } from './styles';

interface UpcomingTicketsProps {
  upcomingTickets: IupcomingTickets;
}

function UpcomingTickets({ upcomingTickets }: UpcomingTicketsProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (
      upcomingTickets.today.length === 0 &&
      upcomingTickets.others.length === 0
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
            {upcomingTickets.today.length !== 0 && (
              <TicketBlock
                tickets={upcomingTickets.today}
                title={`오늘(${dayjs().format('M월 D일')})`}
              />
            )}
            {upcomingTickets.others.length !== 0 && (
              <TicketBlock tickets={upcomingTickets.others} title="관람 예정" />
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
