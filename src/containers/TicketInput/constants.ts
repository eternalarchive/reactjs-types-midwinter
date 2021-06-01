export const SHOW_TICKET_INPUT_FORM = 'SHOW_TICKET_INPUT_FORM' as const;
export const HIDE_TICKET_INPUT_FORM = 'HIDE_TICKET_INPUT_FORM' as const;

export const POST_ADD_TICKET_REQUEST = 'POST_ADD_TICKET_REQUEST' as const;
export const POST_ADD_TICKET_SUCCESS = 'POST_ADD_TICKET_SUCCESS' as const;

export const GET_SEARCH_POSTER_REQUEST = 'GET_SEARCH_POSTER_REQUEST' as const;
export const GET_SEARCH_POSTER_SUCCESS = 'GET_SEARCH_POSTER_SUCCESS' as const;

export const DELETE_TICKET_REQUEST = 'DELETE_TICKET_REQUEST' as const;
export const DELETE_TICKET_SUCCESS = 'DELETE_TICKET_SUCCESS' as const;

type categoryType = 'musical' | 'theater' | 'music-theater' | 'etc';

export const CATEGORIES: categoryType[] = [
  'musical',
  'theater',
  'music-theater',
  'etc',
];

export const CATEGORY = {
  musical: '뮤지컬',
  'music-theater': '음악극',
  theater: '연극',
  etc: '기타',
};

export const TICKETINPUTS = [
  {
    key: 'place',
    placeholder: '관람장소를 입력해주세요',
  },
  {
    key: 'seat',
    placeholder: '좌석을 입력해주세요',
  },
  {
    key: 'price',
    type: 'number',
    placeholder: '가격을 입력해주세요',
  },
  {
    key: 'casting',
    placeholder: '캐스팅을 ,로 구분하여 입력해주세요',
  },
  {
    key: 'discount_type',
    placeholder: '할인권종을 입력해주세요',
  },
];
