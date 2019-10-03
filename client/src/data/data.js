export const admin = {
  companyName: '유청',
  startTime: '20191001',
  revenueStartTime: '2019',
};

export const navHome = [
  {
    id: 1,
    name: '위탁급식/식당',
    to: '#home-main',
    className: 'c-text',
  },
  {
    id: 2,
    name: '온라인 예약',
    to: '#reserve',
    className: 'c-text',
  },
  {
    id: 3,
    name: '위치/오픈시간',
    to: '#board',
    className: 'c-text',
  },
];

export const navClient = [
  {
    id: 1,
    name: '식수현황',
    to: '/user/catering',
    className: 'c-text',
  },
  {
    id: 2,
    name: '특식',
    to: '/user/special-meal',
    className: 'c-text',
  },
  {
    id: 3,
    name: '인보이스',
    to: '/invoice/user',
    className: 'c-text',
  },
  {
    id: 4,
    name: '계정',
    to: '/user/account',
    className: 'c-text',
  },
];

export const navAdminList = [
  {
    id: 1,
    name: '식수현황',
  },
  {
    id: 2,
    name: '인보이스',
  },
  {
    id: 3,
    name: '고객관리',
  },
  {
    id: 4,
    name: '유청계정',
  },
];

export const navAdminItems = {
  1: [
    {
      id: 11,
      name: '위탁급식 식수',
      to: '/admin/count/catering/dd',
    },
    {
      id: 12,
      name: '식당 식수',
      to: '/admin/count/restaurant/companies/dd',
    },
    {
      id: 13,
      name: '식당 매출',
      to: '/admin/count/restaurant/dd',
    },
    {
      id: 14,
      name: '특식',
      to: '/admin/count/specialmeal',
    },
  ],
  2: [
    {
      id: 11,
      name: '거래 명세서',
      to: '/admin/invoice/users',
    },
    {
      id: 12,
      name: '유청 매출 현황',
      to: '/admin/revenue',
    },
  ],
  3: [
    {
      id: 11,
      name: '식수 가격',
      to: '/admin/account/rates',
    },
    {
      id: 12,
      name: '고객 계정',
      to: '/admin/account/users',
    },
    {
      id: 13,
      name: '고객 사업자번호',
      to: '/admin/account/business',
    },
  ],
  4: [
    {
      id: 11,
      name: `${admin.companyName} 계정`,
      to: '/admin/account',
    },
    {
      id: 12,
      name: `${admin.companyName} 계좌`,
      to: '/admin/account/bank',
    },
  ],
};

export const message = {
  auth: {
    loggedInUser: '회원님은 이미 로그인 되어있습니다.',
    loginFailed: '아이디 또는 비밀번호 오류입니다.',
    unauthenticated: '로그인을 해주세요.',
  },
  reserve: {
    success: `예약 상담과 확정을 위해 24시간 이내로 연락을 드리겠습니다. 만약 연락을 못받으시면, ${
      admin.companyName
    }으로 연락주시길 바랍니다.`,
    error: `프로그램 오류로 예약신청이 전송되지 않았습니다. ${
      admin.companyName
    }으로 전화해주시기 바랍니다. 불편을 끼쳐드려 죄송합니다.`,
  },
};

export const userAccountTableHeadColumns = [
  {
    id: '1',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '업체명',
  },
  { id: 'username', numeric: true, disablePadding: false, label: '아이디' },
  {
    id: 'contactNo',
    numeric: true,
    disablePadding: false,
    label: '연락처',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'e-mail',
  },
  {
    id: 'lunchQty',
    numeric: true,
    disablePadding: false,
    label: '중식식수량',
  },
  {
    id: 'dinnerQty',
    numeric: true,
    disablePadding: false,
    label: '석식식수량',
  },
  {
    id: 'lateNightSnackQty',
    numeric: true,
    disablePadding: false,
    label: '야식식수량',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'bankAccountId',
    numeric: true,
    disablePadding: false,
    label: '결제계좌',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: '주소',
  },
  {
    id: 'businessNo',
    numeric: true,
    disablePadding: false,
    label: '사업자번호',
  },
  {
    id: 'businessType',
    numeric: true,
    disablePadding: false,
    label: '비지니스',
  },
  {
    id: 'endDate',
    numeric: true,
    disablePadding: false,
    label: '서비스 종료일자',
  },
];

export const bankAccountTableHeadColumns = [
  {
    id: '1',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'accountHolder',
    numeric: true,
    disablePadding: false,
    label: '예금주',
  },
  { id: 'bankName', numeric: true, disablePadding: false, label: '은행명' },
  {
    id: 'accountNo',
    numeric: true,
    disablePadding: false,
    label: '계좌번호',
  },
];

export const cateringRatesTableHeadColumns = [
  {
    id: '1',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '업체명',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'reservePrice',
    numeric: true,
    disablePadding: false,
    label: '변동가격',
  },
  {
    id: 'reserveDate',
    numeric: true,
    disablePadding: false,
    label: '적용되는 일자',
  },
];

export const usersCateringTableHeadColumns = [
  {
    id: '1',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: '2',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '업체명',
  },
  {
    id: 'lunchQty',
    numeric: true,
    disablePadding: false,
    label: '중식',
  },
  {
    id: 'dinnerQty',
    numeric: true,
    disablePadding: false,
    label: '석식',
  },
  {
    id: 'lateNightSnackQty',
    numeric: true,
    disablePadding: false,
    label: '야식',
  },
];

export const specialMealTableHeadColumns = [
  {
    id: '1',
    numeric: true,
    disablePadding: true,
    label: '',
  },
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '고객명',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: '일자',
  },
  {
    id: 'time',
    numeric: true,
    disablePadding: false,
    label: '시간',
  },
  {
    id: 'sideDish',
    numeric: true,
    disablePadding: false,
    label: '반찬수',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: '식수량',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'sumTotal',
    numeric: true,
    disablePadding: false,
    label: '합계금액',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: '주소',
  },
  {
    id: 'contactNo',
    numeric: true,
    disablePadding: false,
    label: '연락처',
  },
  {
    id: 'note',
    numeric: true,
    disablePadding: false,
    label: '메모',
  },
  {
    id: 'payment',
    numeric: true,
    disablePadding: false,
    label: '인보이스 포함',
  },
];

export const clientSpecialMealTableHeadColumns = [
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '고객명',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: '일자',
  },
  {
    id: 'time',
    numeric: true,
    disablePadding: false,
    label: '시간',
  },
  {
    id: 'sideDish',
    numeric: true,
    disablePadding: false,
    label: '반찬수',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: '식수량',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'sumTotal',
    numeric: true,
    disablePadding: false,
    label: '합계금액',
  },
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: '주소',
  },
  {
    id: 'contactNo',
    numeric: true,
    disablePadding: false,
    label: '연락처',
  },
  {
    id: 'note',
    numeric: true,
    disablePadding: false,
    label: '메모',
  },
];

export const invoiceColumns = [
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '고객명',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'sumTotal',
    numeric: true,
    disablePadding: false,
    label: '합계금액',
  },
];

export const userInvoiceColumns = [
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: '일자',
  },
  {
    id: 'lunchQty',
    numeric: true,
    disablePadding: false,
    label: '중식',
  },
  {
    id: 'dinnerQty',
    numeric: true,
    disablePadding: false,
    label: '석식',
  },
  {
    id: 'lateNightSnackQty',
    numeric: true,
    disablePadding: false,
    label: '야식',
  },
  {
    id: 'mealPrice',
    numeric: true,
    disablePadding: false,
    label: '식수가격',
  },
  {
    id: 'total',
    numeric: true,
    disablePadding: false,
    label: '합계',
  },
];

export const revenueColumns = [
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: '일자',
  },
  {
    id: 'sumTotalInvoice',
    numeric: true,
    disablePadding: false,
    label: '위탁급식',
  },
  {
    id: 'sumTotalSpecialMeal',
    numeric: true,
    disablePadding: false,
    label: '특식',
  },
  {
    id: 'sumTotalResto',
    numeric: true,
    disablePadding: false,
    label: '레스토랑',
  },
  {
    id: 'sumTotal',
    numeric: true,
    disablePadding: false,
    label: '합계',
  },
];

export const userBusinessColumns = [
  {
    id: 'companyName',
    numeric: true,
    disablePadding: false,
    label: '고객명',
  },
  {
    id: 'businessNo',
    numeric: true,
    disablePadding: false,
    label: '사업자 번호',
  },
];
