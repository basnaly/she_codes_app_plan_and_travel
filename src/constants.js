export const PREPARATIONS = [
    {
        note: 'Passport',
        category: 'Documents',
        checked: true,
    },
    {
        note: 'Covid Certificate',
        category: 'Documents',
        checked: false,
    },
    {
        note: 'Boots',
        category: 'Clothes',
        checked: false,
    },
    {
        note: 'Jacket',
        category: 'Clothes',
        checked: true,
    },
];

export const TRANSPORTATIONS = [
    {
        id: 1,
        date: 1659866738000,
        transport: 'British Airways BA164',
        price: 1370,
        currency: '$',
        notes: '7:10, Monday'
    },
    {
        id: 2,
        date: 1659953138000,
        transport: 'Underground',
        price: 50,
        currency: '£',
        notes: 'Oyster card'
    },
];

export const ACCOMMODATION = [
    {
        id: 1,
        dateFrom: 1659830400000, //07/08/22
        dateTo: 1660348800000, //13/08/22
        accommodation: 'Novotel Canary Wharf',
        price: 7054,
        currency: '₪',
        notes: 'City View + Breackfast'
    },
    {
        id: 2,
        dateFrom: 1660348800000, //13/08/22
        dateTo: 1660953600000, //20/08/22
        accommodation: 'Pan Pacific London',
        price: 11272,
        currency: '₪',
        notes: 'Deluxe, River View, without Breakfast'
    },
];

export const VISITINGS = [
    {
        id: 1,
        date: 1659866738000,
        visit: 'Science Museum',
        notes: '10-11 in the morning'
    },
    {
        id: 2,
        date: 1659953138000,
        visit: 'Tower',
        notes: 'order ticket in internet'
    },
];

export const COMMENTS = [
    {
        id: 1,
        comment: 'Hampton court, https://www.hrp.org.uk/hampton-court-palace/#gs.6gcyfd',
    },
    {
        id: 2,
        comment: 'Big Ben, https://www.google.com/search?q=big+ben+maps+google&tbm=lcl&sxsrf=ALiCzsalOnGLTCYsV7mP1_tVP7-A4NY3ew%3A1657961352618&ei=iHvSYq-KJZCE9u8PhuSbyAg&oq=big+ben+maps+google&gs_l=psy-ab.3..0i30i7k1j0i30i8k1l2j0i390k1l3.47848.47848.1.48729.1.1.0.0.0.0.235.235.2-1.1.0....0...1c.1.64.psy-ab..0.1.235....0.cup-LY0vgIg#rlfi=hd:;si:;mv:[[51.50198525821998,-0.12071945032016584],[51.499477387480155,-0.12853540738956282],null,[51.50073134010064,-0.12462742885486433],18]',
    },
];

export const EXPENCES = [
    {
        id: 1,
        date: 1659866738000,
        product: 'Science Museum',
        price: 45,
        currency: '£',
        payment: 'Visa',
        notes: '3 tickets'
    },
    {
        id: 2,
        date: 1659953138000,
        product: 'Temse Boat Trip',
        price: 80,
        currency: '£',
        payment: 'Mastercard',
        notes: 'trip with dinner'
    },
];

export const PAYMENT_OPTIONS = [
    'Cash', 'Mastercard', 'American Express', 'Visa', 'Diners'
];

export const CURRENCY_OPTIONS = [
    '$', '€', '￡', '₣', '￥', '₪'
]
