import React from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { showTicketInputForm } from '../../../containers/TicketInput/actions';
import BlueButton from '../../Buttons/BlueButton';
import { S } from './styles';

function EmptyBox() {
  const dispatch = useDispatch();
  const openTicketForm = () => {
    dispatch(showTicketInputForm({ schedule: dayjs().format() }));
  };

  return (
    <div css={S.empty}>
      <span role="img" aria-label="느낌표" css={S.emptyEmoji}>
        ❗️
      </span>
      <p css={S.emptyText}>
        관람 기록이 없습니다
        <br />
        아래 버튼을 눌러 관람 기록을 추가해주세요!
      </p>
      <BlueButton text="티켓 추가" handleClick={openTicketForm} />
    </div>
  );
}

export default EmptyBox;
