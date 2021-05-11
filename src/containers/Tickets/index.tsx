import React, { useState, useEffect, createRef } from 'react';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../store/rootReducer';
import { SearchIcon } from '../../components/Svgs/index';
import Ticket from '../../components/DataDisplay/Ticket';
import EmptyBox from '../../components/DataDisplay/EmptyBox';
import Loading from '../../components/Common/Loading';
import { showTicketInputForm } from '../TicketInput/actions';
import { TticketData } from '../Calendar/saga';
import { getAllTicketsRequest } from '../Calendar/actions';
import { S } from './styles';

function Tickets() {
  const dispatch = useDispatch();
  const { loading, calendarTickets } = useSelector(
    (state: rootState) => state.calendar.calendarDatas,
  );
  const [tickets, setTickets] = useState<TticketData[] | []>([]);
  const [filterTickets, setFilterTickets] = useState<TticketData[] | []>([]);
  const searchInputRef = createRef<any>();

  useEffect(() => {
    if (!calendarTickets) dispatch(getAllTicketsRequest());
  }, [calendarTickets, dispatch]);

  useEffect(() => {
    if (!calendarTickets) return;
    setTickets(
      [...calendarTickets].sort(
        (a, b) =>
          +dayjs(b.schedule).format('YYYYMMDD') -
          +dayjs(a.schedule).format('YYYYMMDD'),
      ),
    );
  }, [calendarTickets]);

  useEffect(() => {
    setFilterTickets(tickets);
  }, [tickets]);

  const searchTickets = () => {
    if (!calendarTickets) return;
    if (!searchInputRef) return;
    setFilterTickets(
      tickets.filter(
        ticket =>
          ticket.title.includes(searchInputRef?.current.value) ||
          ticket?.casting?.join('').includes(searchInputRef?.current.value),
      ),
    );
  };

  const changeTicketInfo = (ticket: TticketData) => {
    dispatch(showTicketInputForm({ ...ticket, isModify: true }));
  };

  if (loading) return <Loading />;

  return (
    <section css={S.section}>
      <h2 css={S.title}>티켓 목록</h2>
      <label htmlFor="search" css={S.label}>
        <span className="a11y-hidden">티켓 검색하기</span>
        <input
          id="search"
          placeholder="공연 또는 배우를 입력해주세요"
          css={S.search}
          onKeyUp={searchTickets}
          ref={searchInputRef}
        />
        <SearchIcon css={S.searchIcon} />
      </label>
      {filterTickets?.length !== 0 ? (
        <div css={S.ticket}>
          {filterTickets?.map((ticket: TticketData) => (
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
    </section>
  );
}

export default Tickets;
