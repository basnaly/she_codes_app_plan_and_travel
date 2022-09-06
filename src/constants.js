export const validatePassword = (password) => {
		
    var regularExpression =
        /^(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*-_]{8,12}$/;

    const found = password.match(regularExpression);

    return !!found;
};

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
        date: '05/09/2022',
        transport: 'British Airways BA164',
        price: 1370,
        currency: '$',
        notes: '7:10, Monday'
    },
    {
        id: 2,
        date: '06/09/2022',
        transport: 'Underground',
        price: 50,
        currency: '£',
        notes: 'Oyster card'
    },
];

export const ACCOMMODATION = [
    {
        id: 1,
        dateFrom: '05/09/2022',
        dateTo: '13/09/2022',
        accommodation: 'Novotel Canary Wharf',
        price: 7054,
        currency: '₪',
        notes: 'City View + Breackfast'
    },
    {
        id: 2,
        dateFrom: '13/09/2022',
        dateTo: '19/09/2022',
        accommodation: 'Pan Pacific London',
        price: 11272,
        currency: '₪',
        notes: 'Deluxe, River View, without Breakfast'
    },
];

export const VISITINGS = [
    {
        id: 1,
        date: '06/09/2022',
        visit: 'Science Museum',
        notes: '10-11 in the morning'
    },
    {
        id: 2,
        date: '07/09/2022',
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
        date: '06/09/2022',
        product: 'Science Museum',
        price: 45,
        currency: '£',
        payment: 'Visa',
        notes: '3 tickets'
    },
    {
        id: 2,
        date: '06/09/2022',
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

export const LIST_COUNTRIES = [
    {
      "name": "Bangladesh",
      "iso2": "BD",
      "iso3": "BGD",
      "unicodeFlag": "🇧🇩"
    },
    {
      "name": "Belgium",
      "iso2": "BE",
      "iso3": "BEL",
      "unicodeFlag": "🇧🇪"
    },
    {
      "name": "Burkina Faso",
      "iso2": "BF",
      "iso3": "BFA",
      "unicodeFlag": "🇧🇫"
    },
    {
      "name": "Bulgaria",
      "iso2": "BG",
      "iso3": "BGR",
      "unicodeFlag": "🇧🇬"
    },
    {
      "name": "Bosnia and Herzegovina",
      "iso2": "BA",
      "iso3": "BIH",
      "unicodeFlag": "🇧🇦"
    },
    {
      "name": "Barbados",
      "iso2": "BB",
      "iso3": "BRB",
      "unicodeFlag": "🇧🇧"
    },
    {
      "name": "Wallis and Futuna",
      "iso2": "WF",
      "iso3": "WLF",
      "unicodeFlag": "🇼🇫"
    },
    {
      "name": "Saint Barthelemy",
      "iso2": "BL",
      "iso3": "BLM",
      "unicodeFlag": "🇧🇱"
    },
    {
      "name": "Bermuda",
      "iso2": "BM",
      "iso3": "BMU",
      "unicodeFlag": "🇧🇲"
    },
    {
      "name": "Brunei",
      "iso2": "BN",
      "iso3": "BRN",
      "unicodeFlag": "🇧🇳"
    },
    {
      "name": "Bolivia",
      "iso2": "BO",
      "iso3": "BOL",
      "unicodeFlag": "🇧🇴"
    },
    {
      "name": "Bahrain",
      "iso2": "BH",
      "iso3": "BHR",
      "unicodeFlag": "🇧🇭"
    },
    {
      "name": "Burundi",
      "iso2": "BI",
      "iso3": "BDI",
      "unicodeFlag": "🇧🇮"
    },
    {
      "name": "Benin",
      "iso2": "BJ",
      "iso3": "BEN",
      "unicodeFlag": "🇧🇯"
    },
    {
      "name": "Bhutan",
      "iso2": "BT",
      "iso3": "BTN",
      "unicodeFlag": "🇧🇹"
    },
    {
      "name": "Jamaica",
      "iso2": "JM",
      "iso3": "JAM",
      "unicodeFlag": "🇯🇲"
    },
    {
      "name": "Bouvet Island",
      "iso2": "BV",
      "iso3": "BVT",
      "unicodeFlag": "🇧🇻"
    },
    {
      "name": "Botswana",
      "iso2": "BW",
      "iso3": "BWA",
      "unicodeFlag": "🇧🇼"
    },
    {
      "name": "Samoa",
      "iso2": "WS",
      "iso3": "WSM",
      "unicodeFlag": "🇼🇸"
    },
    {
      "name": "Bonaire, Saint Eustatius and Saba ",
      "iso2": "BQ",
      "iso3": "BES",
      "unicodeFlag": "🇧🇶"
    },
    {
      "name": "Brazil",
      "iso2": "BR",
      "iso3": "BRA",
      "unicodeFlag": "🇧🇷"
    },
    {
      "name": "Bahamas",
      "iso2": "BS",
      "iso3": "BHS",
      "unicodeFlag": "🇧🇸"
    },
    {
      "name": "Jersey",
      "iso2": "JE",
      "iso3": "JEY",
      "unicodeFlag": "🇯🇪"
    },
    {
      "name": "Belarus",
      "iso2": "BY",
      "iso3": "BLR",
      "unicodeFlag": "🇧🇾"
    },
    {
      "name": "Belize",
      "iso2": "BZ",
      "iso3": "BLZ",
      "unicodeFlag": "🇧🇿"
    },
    {
      "name": "Russia",
      "iso2": "RU",
      "iso3": "RUS",
      "unicodeFlag": "🇷🇺"
    },
    {
      "name": "Rwanda",
      "iso2": "RW",
      "iso3": "RWA",
      "unicodeFlag": "🇷🇼"
    },
    {
      "name": "Serbia",
      "iso2": "RS",
      "iso3": "SRB",
      "unicodeFlag": "🇷🇸"
    },
    {
      "name": "Timor-Leste",
      "iso2": "TL",
      "iso3": "TLS",
      "unicodeFlag": "🇹🇱"
    },
    {
      "name": "Réunion",
      "iso2": "RE",
      "iso3": "REU",
      "unicodeFlag": "🇷🇪"
    },
    {
      "name": "Turkmenistan",
      "iso2": "TM",
      "iso3": "TKM",
      "unicodeFlag": "🇹🇲"
    },
    {
      "name": "Tajikistan",
      "iso2": "TJ",
      "iso3": "TJK",
      "unicodeFlag": "🇹🇯"
    },
    {
      "name": "Romania",
      "iso2": "RO",
      "iso3": "ROU",
      "unicodeFlag": "🇷🇴"
    },
    {
      "name": "Tokelau",
      "iso2": "TK",
      "iso3": "TKL",
      "unicodeFlag": "🇹🇰"
    },
    {
      "name": "Guinea-Bissau",
      "iso2": "GW",
      "iso3": "GNB",
      "unicodeFlag": "🇬🇼"
    },
    {
      "name": "Guam",
      "iso2": "GU",
      "iso3": "GUM",
      "unicodeFlag": "🇬🇺"
    },
    {
      "name": "Guatemala",
      "iso2": "GT",
      "iso3": "GTM",
      "unicodeFlag": "🇬🇹"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "iso2": "GS",
      "iso3": "SGS",
      "unicodeFlag": "🇬🇸"
    },
    {
      "name": "Greece",
      "iso2": "GR",
      "iso3": "GRC",
      "unicodeFlag": "🇬🇷"
    },
    {
      "name": "Equatorial Guinea",
      "iso2": "GQ",
      "iso3": "GNQ",
      "unicodeFlag": "🇬🇶"
    },
    {
      "name": "Guadeloupe",
      "iso2": "GP",
      "iso3": "GLP",
      "unicodeFlag": "🇬🇵"
    },
    {
      "name": "Japan",
      "iso2": "JP",
      "iso3": "JPN",
      "unicodeFlag": "🇯🇵"
    },
    {
      "name": "Guyana",
      "iso2": "GY",
      "iso3": "GUY",
      "unicodeFlag": "🇬🇾"
    },
    {
      "name": "Guernsey",
      "iso2": "GG",
      "iso3": "GGY",
      "unicodeFlag": "🇬🇬"
    },
    {
      "name": "Georgia",
      "iso2": "GE",
      "iso3": "GEO",
      "unicodeFlag": "🇬🇪"
    },
    {
      "name": "Grenada",
      "iso2": "GD",
      "iso3": "GRD",
      "unicodeFlag": "🇬🇩"
    },
    {
      "name": "United Kingdom",
      "iso2": "GB",
      "iso3": "GBR",
      "unicodeFlag": "🇬🇧"
    },
    {
      "name": "Gabon",
      "iso2": "GA",
      "iso3": "GAB",
      "unicodeFlag": "🇬🇦"
    },
    {
      "name": "El Salvador",
      "iso2": "SV",
      "iso3": "SLV",
      "unicodeFlag": "🇸🇻"
    },
    {
      "name": "Guinea",
      "iso2": "GN",
      "iso3": "GIN",
      "unicodeFlag": "🇬🇳"
    },
    {
      "name": "Gambia",
      "iso2": "GM",
      "iso3": "GMB",
      "unicodeFlag": "🇬🇲"
    },
    {
      "name": "Greenland",
      "iso2": "GL",
      "iso3": "GRL",
      "unicodeFlag": "🇬🇱"
    },
    {
      "name": "Gibraltar",
      "iso2": "GI",
      "iso3": "GIB",
      "unicodeFlag": "🇬🇮"
    },
    {
      "name": "Ghana",
      "iso2": "GH",
      "iso3": "GHA",
      "unicodeFlag": "🇬🇭"
    },
    {
      "name": "Oman",
      "iso2": "OM",
      "iso3": "OMN",
      "unicodeFlag": "🇴🇲"
    },
    {
      "name": "Tunisia",
      "iso2": "TN",
      "iso3": "TUN",
      "unicodeFlag": "🇹🇳"
    },
    {
      "name": "Jordan",
      "iso2": "JO",
      "iso3": "JOR",
      "unicodeFlag": "🇯🇴"
    },
    {
      "name": "Croatia",
      "iso2": "HR",
      "iso3": "HRV",
      "unicodeFlag": "🇭🇷"
    },
    {
      "name": "Haiti",
      "iso2": "HT",
      "iso3": "HTI",
      "unicodeFlag": "🇭🇹"
    },
    {
      "name": "Hungary",
      "iso2": "HU",
      "iso3": "HUN",
      "unicodeFlag": "🇭🇺"
    },
    {
      "name": "Hong Kong",
      "iso2": "HK",
      "iso3": "HKG",
      "unicodeFlag": "🇭🇰"
    },
    {
      "name": "Honduras",
      "iso2": "HN",
      "iso3": "HND",
      "unicodeFlag": "🇭🇳"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "iso2": "HM",
      "iso3": "HMD",
      "unicodeFlag": "🇭🇲"
    },
    {
      "name": "Venezuela",
      "iso2": "VE",
      "iso3": "VEN",
      "unicodeFlag": "🇻🇪"
    },
    {
      "name": "Vatican City State (Holy See)",
      "iso2": "VA",
      "iso3": "VAT",
      "unicodeFlag": "🇻🇦"
    },
    {
      "name": "Puerto Rico",
      "iso2": "PR",
      "iso3": "PRI",
      "unicodeFlag": "🇵🇷"
    },
    {
      "name": "Palestinian Territory",
      "iso2": "PS",
      "iso3": "PSE",
      "unicodeFlag": "🇵🇸"
    },
    {
      "name": "Palau",
      "iso2": "PW",
      "iso3": "PLW",
      "unicodeFlag": "🇵🇼"
    },
    {
      "name": "Portugal",
      "iso2": "PT",
      "iso3": "PRT",
      "unicodeFlag": "🇵🇹"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "iso2": "SJ",
      "iso3": "SJM",
      "unicodeFlag": "🇸🇯"
    },
    {
      "name": "Paraguay",
      "iso2": "PY",
      "iso3": "PRY",
      "unicodeFlag": "🇵🇾"
    },
    {
      "name": "Iraq",
      "iso2": "IQ",
      "iso3": "IRQ",
      "unicodeFlag": "🇮🇶"
    },
    {
      "name": "Panama",
      "iso2": "PA",
      "iso3": "PAN",
      "unicodeFlag": "🇵🇦"
    },
    {
      "name": "French Polynesia",
      "iso2": "PF",
      "iso3": "PYF",
      "unicodeFlag": "🇵🇫"
    },
    {
      "name": "Papua New Guinea",
      "iso2": "PG",
      "iso3": "PNG",
      "unicodeFlag": "🇵🇬"
    },
    {
      "name": "Peru",
      "iso2": "PE",
      "iso3": "PER",
      "unicodeFlag": "🇵🇪"
    },
    {
      "name": "Pakistan",
      "iso2": "PK",
      "iso3": "PAK",
      "unicodeFlag": "🇵🇰"
    },
    {
      "name": "Philippines",
      "iso2": "PH",
      "iso3": "PHL",
      "unicodeFlag": "🇵🇭"
    },
    {
      "name": "Pitcairn",
      "iso2": "PN",
      "iso3": "PCN",
      "unicodeFlag": "🇵🇳"
    },
    {
      "name": "Poland",
      "iso2": "PL",
      "iso3": "POL",
      "unicodeFlag": "🇵🇱"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "iso2": "PM",
      "iso3": "SPM",
      "unicodeFlag": "🇵🇲"
    },
    {
      "name": "Zambia",
      "iso2": "ZM",
      "iso3": "ZMB",
      "unicodeFlag": "🇿🇲"
    },
    {
      "name": "Western Sahara",
      "iso2": "EH",
      "iso3": "ESH",
      "unicodeFlag": "🇪🇭"
    },
    {
      "name": "Estonia",
      "iso2": "EE",
      "iso3": "EST",
      "unicodeFlag": "🇪🇪"
    },
    {
      "name": "Egypt",
      "iso2": "EG",
      "iso3": "EGY",
      "unicodeFlag": "🇪🇬"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "iso2": "CC",
      "iso3": "CCK",
      "unicodeFlag": "🇨🇨"
    },
    {
      "name": "South Africa",
      "iso2": "ZA",
      "iso3": "ZAF",
      "unicodeFlag": "🇿🇦"
    },
    {
      "name": "Ecuador",
      "iso2": "EC",
      "iso3": "ECU",
      "unicodeFlag": "🇪🇨"
    },
    {
      "name": "Italy",
      "iso2": "IT",
      "iso3": "ITA",
      "unicodeFlag": "🇮🇹"
    },
    {
      "name": "Vietnam",
      "iso2": "VN",
      "iso3": "VNM",
      "unicodeFlag": "🇻🇳"
    },
    {
      "name": "Solomon Islands",
      "iso2": "SB",
      "iso3": "SLB",
      "unicodeFlag": "🇸🇧"
    },
    {
      "name": "Ethiopia",
      "iso2": "ET",
      "iso3": "ETH",
      "unicodeFlag": "🇪🇹"
    },
    {
      "name": "Somalia",
      "iso2": "SO",
      "iso3": "SOM",
      "unicodeFlag": "🇸🇴"
    },
    {
      "name": "Zimbabwe",
      "iso2": "ZW",
      "iso3": "ZWE",
      "unicodeFlag": "🇿🇼"
    },
    {
      "name": "Saudi Arabia",
      "iso2": "SA",
      "iso3": "SAU",
      "unicodeFlag": "🇸🇦"
    },
    {
      "name": "Spain",
      "iso2": "ES",
      "iso3": "ESP",
      "unicodeFlag": "🇪🇸"
    },
    {
      "name": "Eritrea",
      "iso2": "ER",
      "iso3": "ERI",
      "unicodeFlag": "🇪🇷"
    },
    {
      "name": "Montenegro",
      "iso2": "ME",
      "iso3": "MNE",
      "unicodeFlag": "🇲🇪"
    },
    {
      "name": "Moldova",
      "iso2": "MD",
      "iso3": "MDA",
      "unicodeFlag": "🇲🇩"
    },
    {
      "name": "Madagascar",
      "iso2": "MG",
      "iso3": "MDG",
      "unicodeFlag": "🇲🇬"
    },
    {
      "name": "Saint Martin",
      "iso2": "MF",
      "iso3": "MAF",
      "unicodeFlag": "🇲🇫"
    },
    {
      "name": "Morocco",
      "iso2": "MA",
      "iso3": "MAR",
      "unicodeFlag": "🇲🇦"
    },
    {
      "name": "Monaco",
      "iso2": "MC",
      "iso3": "MCO",
      "unicodeFlag": "🇲🇨"
    },
    {
      "name": "Uzbekistan",
      "iso2": "UZ",
      "iso3": "UZB",
      "unicodeFlag": "🇺🇿"
    },
    {
      "name": "Myanmar",
      "iso2": "MM",
      "iso3": "MMR",
      "unicodeFlag": "🇲🇲"
    },
    {
      "name": "Mali",
      "iso2": "ML",
      "iso3": "MLI",
      "unicodeFlag": "🇲🇱"
    },
    {
      "name": "Macau",
      "iso2": "MO",
      "iso3": "MAC",
      "unicodeFlag": "🇲🇴"
    },
    {
      "name": "Mongolia",
      "iso2": "MN",
      "iso3": "MNG",
      "unicodeFlag": "🇲🇳"
    },
    {
      "name": "Marshall Islands",
      "iso2": "MH",
      "iso3": "MHL",
      "unicodeFlag": "🇲🇭"
    },
    {
      "name": "Macedonia",
      "iso2": "MK",
      "iso3": "MKD",
      "unicodeFlag": "🇲🇰"
    },
    {
      "name": "Mauritius",
      "iso2": "MU",
      "iso3": "MUS",
      "unicodeFlag": "🇲🇺"
    },
    {
      "name": "Malta",
      "iso2": "MT",
      "iso3": "MLT",
      "unicodeFlag": "🇲🇹"
    },
    {
      "name": "Malawi",
      "iso2": "MW",
      "iso3": "MWI",
      "unicodeFlag": "🇲🇼"
    },
    {
      "name": "Maldives",
      "iso2": "MV",
      "iso3": "MDV",
      "unicodeFlag": "🇲🇻"
    },
    {
      "name": "Martinique",
      "iso2": "MQ",
      "iso3": "MTQ",
      "unicodeFlag": "🇲🇶"
    },
    {
      "name": "Northern Mariana Islands",
      "iso2": "MP",
      "iso3": "MNP",
      "unicodeFlag": "🇲🇵"
    },
    {
      "name": "Montserrat",
      "iso2": "MS",
      "iso3": "MSR",
      "unicodeFlag": "🇲🇸"
    },
    {
      "name": "Mauritania",
      "iso2": "MR",
      "iso3": "MRT",
      "unicodeFlag": "🇲🇷"
    },
    {
      "name": "Isle of Man",
      "iso2": "IM",
      "iso3": "IMN",
      "unicodeFlag": "🇮🇲"
    },
    {
      "name": "Uganda",
      "iso2": "UG",
      "iso3": "UGA",
      "unicodeFlag": "🇺🇬"
    },
    {
      "name": "Tanzania",
      "iso2": "TZ",
      "iso3": "TZA",
      "unicodeFlag": "🇹🇿"
    },
    {
      "name": "Malaysia",
      "iso2": "MY",
      "iso3": "MYS",
      "unicodeFlag": "🇲🇾"
    },
    {
      "name": "Mexico",
      "iso2": "MX",
      "iso3": "MEX",
      "unicodeFlag": "🇲🇽"
    },
    {
      "name": "Israel",
      "iso2": "IL",
      "iso3": "ISR",
      "unicodeFlag": "🇮🇱"
    },
    {
      "name": "France",
      "iso2": "FR",
      "iso3": "FRA",
      "unicodeFlag": "🇫🇷"
    },
    {
      "name": "British Indian Ocean Territory",
      "iso2": "IO",
      "iso3": "IOT",
      "unicodeFlag": "🇮🇴"
    },
    {
      "name": "Saint Helena",
      "iso2": "SH",
      "iso3": "SHN",
      "unicodeFlag": "🇸🇭"
    },
    {
      "name": "Finland",
      "iso2": "FI",
      "iso3": "FIN",
      "unicodeFlag": "🇫🇮"
    },
    {
      "name": "Fiji",
      "iso2": "FJ",
      "iso3": "FJI",
      "unicodeFlag": "🇫🇯"
    },
    {
      "name": "Falkland Islands",
      "iso2": "FK",
      "iso3": "FLK",
      "unicodeFlag": "🇫🇰"
    },
    {
      "name": "Micronesia",
      "iso2": "FM",
      "iso3": "FSM",
      "unicodeFlag": "🇫🇲"
    },
    {
      "name": "Faroe Islands",
      "iso2": "FO",
      "iso3": "FRO",
      "unicodeFlag": "🇫🇴"
    },
    {
      "name": "Nicaragua",
      "iso2": "NI",
      "iso3": "NIC",
      "unicodeFlag": "🇳🇮"
    },
    {
      "name": "Netherlands",
      "iso2": "NL",
      "iso3": "NLD",
      "unicodeFlag": "🇳🇱"
    },
    {
      "name": "Norway",
      "iso2": "NO",
      "iso3": "NOR",
      "unicodeFlag": "🇳🇴"
    },
    {
      "name": "Namibia",
      "iso2": "NA",
      "iso3": "NAM",
      "unicodeFlag": "🇳🇦"
    },
    {
      "name": "Vanuatu",
      "iso2": "VU",
      "iso3": "VUT",
      "unicodeFlag": "🇻🇺"
    },
    {
      "name": "New Caledonia",
      "iso2": "NC",
      "iso3": "NCL",
      "unicodeFlag": "🇳🇨"
    },
    {
      "name": "Niger",
      "iso2": "NE",
      "iso3": "NER",
      "unicodeFlag": "🇳🇪"
    },
    {
      "name": "Norfolk Island",
      "iso2": "NF",
      "iso3": "NFK",
      "unicodeFlag": "🇳🇫"
    },
    {
      "name": "Nigeria",
      "iso2": "NG",
      "iso3": "NGA",
      "unicodeFlag": "🇳🇬"
    },
    {
      "name": "New Zealand",
      "iso2": "NZ",
      "iso3": "NZL",
      "unicodeFlag": "🇳🇿"
    },
    {
      "name": "Nepal",
      "iso2": "NP",
      "iso3": "NPL",
      "unicodeFlag": "🇳🇵"
    },
    {
      "name": "Nauru",
      "iso2": "NR",
      "iso3": "NRU",
      "unicodeFlag": "🇳🇷"
    },
    {
      "name": "Niue",
      "iso2": "NU",
      "iso3": "NIU",
      "unicodeFlag": "🇳🇺"
    },
    {
      "name": "Cook Islands",
      "iso2": "CK",
      "iso3": "COK",
      "unicodeFlag": "🇨🇰"
    },
    {
      "name": "Kosovo",
      "iso2": "XK",
      "iso3": "XKX",
      "unicodeFlag": "🇽🇰"
    },
    {
      "name": "Ivory Coast",
      "iso2": "CI",
      "iso3": "CIV",
      "unicodeFlag": "🇨🇮"
    },
    {
      "name": "Switzerland",
      "iso2": "CH",
      "iso3": "CHE",
      "unicodeFlag": "🇨🇭"
    },
    {
      "name": "Colombia",
      "iso2": "CO",
      "iso3": "COL",
      "unicodeFlag": "🇨🇴"
    },
    {
      "name": "China",
      "iso2": "CN",
      "iso3": "CHN",
      "unicodeFlag": "🇨🇳"
    },
    {
      "name": "Cameroon",
      "iso2": "CM",
      "iso3": "CMR",
      "unicodeFlag": "🇨🇲"
    },
    {
      "name": "Chile",
      "iso2": "CL",
      "iso3": "CHL",
      "unicodeFlag": "🇨🇱"
    },
    {
      "name": "Cocos Islands",
      "iso2": "CC",
      "iso3": "CCK",
      "unicodeFlag": "🇨🇨"
    },
    {
      "name": "Canada",
      "iso2": "CA",
      "iso3": "CAN",
      "unicodeFlag": "🇨🇦"
    },
    {
      "name": "Congo",
      "iso2": "CG",
      "iso3": "COG",
      "unicodeFlag": "🇨🇬"
    },
    {
      "name": "Central African Republic",
      "iso2": "CF",
      "iso3": "CAF",
      "unicodeFlag": "🇨🇫"
    },
    {
      "name": "Democratic Republic of the Congo",
      "iso2": "CD",
      "iso3": "COD",
      "unicodeFlag": "🇨🇩"
    },
    {
      "name": "Czech Republic",
      "iso2": "CZ",
      "iso3": "CZE",
      "unicodeFlag": "🇨🇿"
    },
    {
      "name": "Cyprus",
      "iso2": "CY",
      "iso3": "CYP",
      "unicodeFlag": "🇨🇾"
    },
    {
      "name": "Christmas Island",
      "iso2": "CX",
      "iso3": "CXR",
      "unicodeFlag": "🇨🇽"
    },
    {
      "name": "Costa Rica",
      "iso2": "CR",
      "iso3": "CRI",
      "unicodeFlag": "🇨🇷"
    },
    {
      "name": "Curacao",
      "iso2": "CW",
      "iso3": "CUW",
      "unicodeFlag": "🇨🇼"
    },
    {
      "name": "Cape Verde",
      "iso2": "CV",
      "iso3": "CPV",
      "unicodeFlag": "🇨🇻"
    },
    {
      "name": "Cuba",
      "iso2": "CU",
      "iso3": "CUB",
      "unicodeFlag": "🇨🇺"
    },
    {
      "name": "Swaziland",
      "iso2": "SZ",
      "iso3": "SWZ",
      "unicodeFlag": "🇸🇿"
    },
    {
      "name": "Syria",
      "iso2": "SY",
      "iso3": "SYR",
      "unicodeFlag": "🇸🇾"
    },
    {
      "name": "Sint Maarten",
      "iso2": "SX",
      "iso3": "SXM",
      "unicodeFlag": "🇸🇽"
    },
    {
      "name": "Kyrgyzstan",
      "iso2": "KG",
      "iso3": "KGZ",
      "unicodeFlag": "🇰🇬"
    },
    {
      "name": "Kenya",
      "iso2": "KE",
      "iso3": "KEN",
      "unicodeFlag": "🇰🇪"
    },
    {
      "name": "South Sudan",
      "iso2": "SS",
      "iso3": "SSD",
      "unicodeFlag": "🇸🇸"
    },
    {
      "name": "Suriname",
      "iso2": "SR",
      "iso3": "SUR",
      "unicodeFlag": "🇸🇷"
    },
    {
      "name": "Kiribati",
      "iso2": "KI",
      "iso3": "KIR",
      "unicodeFlag": "🇰🇮"
    },
    {
      "name": "Cambodia",
      "iso2": "KH",
      "iso3": "KHM",
      "unicodeFlag": "🇰🇭"
    },
    {
      "name": "Saint Kitts and Nevis",
      "iso2": "KN",
      "iso3": "KNA",
      "unicodeFlag": "🇰🇳"
    },
    {
      "name": "Comoros",
      "iso2": "KM",
      "iso3": "COM",
      "unicodeFlag": "🇰🇲"
    },
    {
      "name": "Sao Tome and Principe",
      "iso2": "ST",
      "iso3": "STP",
      "unicodeFlag": "🇸🇹"
    },
    {
      "name": "Slovakia",
      "iso2": "SK",
      "iso3": "SVK",
      "unicodeFlag": "🇸🇰"
    },
    {
      "name": "South Korea",
      "iso2": "KR",
      "iso3": "KOR",
      "unicodeFlag": "🇰🇷"
    },
    {
      "name": "Slovenia",
      "iso2": "SI",
      "iso3": "SVN",
      "unicodeFlag": "🇸🇮"
    },
    {
      "name": "Korea North",
      "iso2": "KP",
      "iso3": "PRK",
      "unicodeFlag": "🇰🇵"
    },
    {
      "name": "Kuwait",
      "iso2": "KW",
      "iso3": "KWT",
      "unicodeFlag": "🇰🇼"
    },
    {
      "name": "Senegal",
      "iso2": "SN",
      "iso3": "SEN",
      "unicodeFlag": "🇸🇳"
    },
    {
      "name": "San Marino",
      "iso2": "SM",
      "iso3": "SMR",
      "unicodeFlag": "🇸🇲"
    },
    {
      "name": "Sierra Leone",
      "iso2": "SL",
      "iso3": "SLE",
      "unicodeFlag": "🇸🇱"
    },
    {
      "name": "Seychelles",
      "iso2": "SC",
      "iso3": "SYC",
      "unicodeFlag": "🇸🇨"
    },
    {
      "name": "Kazakhstan",
      "iso2": "KZ",
      "iso3": "KAZ",
      "unicodeFlag": "🇰🇿"
    },
    {
      "name": "Cayman Islands",
      "iso2": "KY",
      "iso3": "CYM",
      "unicodeFlag": "🇰🇾"
    },
    {
      "name": "Singapore",
      "iso2": "SG",
      "iso3": "SGP",
      "unicodeFlag": "🇸🇬"
    },
    {
      "name": "Sweden",
      "iso2": "SE",
      "iso3": "SWE",
      "unicodeFlag": "🇸🇪"
    },
    {
      "name": "Sudan",
      "iso2": "SD",
      "iso3": "SDN",
      "unicodeFlag": "🇸🇩"
    },
    {
      "name": "Dominican Republic",
      "iso2": "DO",
      "iso3": "DOM",
      "unicodeFlag": "🇩🇴"
    },
    {
      "name": "Dominica",
      "iso2": "DM",
      "iso3": "DMA",
      "unicodeFlag": "🇩🇲"
    },
    {
      "name": "Djibouti",
      "iso2": "DJ",
      "iso3": "DJI",
      "unicodeFlag": "🇩🇯"
    },
    {
      "name": "Denmark",
      "iso2": "DK",
      "iso3": "DNK",
      "unicodeFlag": "🇩🇰"
    },
    {
      "name": "British Virgin Islands",
      "iso2": "VG",
      "iso3": "VGB",
      "unicodeFlag": "🇻🇬"
    },
    {
      "name": "Germany",
      "iso2": "DE",
      "iso3": "DEU",
      "unicodeFlag": "🇩🇪"
    },
    {
      "name": "Yemen",
      "iso2": "YE",
      "iso3": "YEM",
      "unicodeFlag": "🇾🇪"
    },
    {
      "name": "Algeria",
      "iso2": "DZ",
      "iso3": "DZA",
      "unicodeFlag": "🇩🇿"
    },
    {
      "name": "United States",
      "iso2": "US",
      "iso3": "USA",
      "unicodeFlag": "🇺🇸"
    },
    {
      "name": "Uruguay",
      "iso2": "UY",
      "iso3": "URY",
      "unicodeFlag": "🇺🇾"
    },
    {
      "name": "Mayotte",
      "iso2": "YT",
      "iso3": "MYT",
      "unicodeFlag": "🇾🇹"
    },
    {
      "name": "United States Minor Outlying Islands",
      "iso2": "UM",
      "iso3": "UMI",
      "unicodeFlag": "🇺🇲"
    },
    {
      "name": "Lebanon",
      "iso2": "LB",
      "iso3": "LBN",
      "unicodeFlag": "🇱🇧"
    },
    {
      "name": "Saint Lucia",
      "iso2": "LC",
      "iso3": "LCA",
      "unicodeFlag": "🇱🇨"
    },
    {
      "name": "Laos",
      "iso2": "LA",
      "iso3": "LAO",
      "unicodeFlag": "🇱🇦"
    },
    {
      "name": "Tuvalu",
      "iso2": "TV",
      "iso3": "TUV",
      "unicodeFlag": "🇹🇻"
    },
    {
      "name": "Taiwan",
      "iso2": "TW",
      "iso3": "TWN",
      "unicodeFlag": "🇹🇼"
    },
    {
      "name": "Trinidad and Tobago",
      "iso2": "TT",
      "iso3": "TTO",
      "unicodeFlag": "🇹🇹"
    },
    {
      "name": "Turkey",
      "iso2": "TR",
      "iso3": "TUR",
      "unicodeFlag": "🇹🇷"
    },
    {
      "name": "Sri Lanka",
      "iso2": "LK",
      "iso3": "LKA",
      "unicodeFlag": "🇱🇰"
    },
    {
      "name": "Liechtenstein",
      "iso2": "LI",
      "iso3": "LIE",
      "unicodeFlag": "🇱🇮"
    },
    {
      "name": "Latvia",
      "iso2": "LV",
      "iso3": "LVA",
      "unicodeFlag": "🇱🇻"
    },
    {
      "name": "Tonga",
      "iso2": "TO",
      "iso3": "TON",
      "unicodeFlag": "🇹🇴"
    },
    {
      "name": "Lithuania",
      "iso2": "LT",
      "iso3": "LTU",
      "unicodeFlag": "🇱🇹"
    },
    {
      "name": "Luxembourg",
      "iso2": "LU",
      "iso3": "LUX",
      "unicodeFlag": "🇱🇺"
    },
    {
      "name": "Liberia",
      "iso2": "LR",
      "iso3": "LBR",
      "unicodeFlag": "🇱🇷"
    },
    {
      "name": "Lesotho",
      "iso2": "LS",
      "iso3": "LSO",
      "unicodeFlag": "🇱🇸"
    },
    {
      "name": "Thailand",
      "iso2": "TH",
      "iso3": "THA",
      "unicodeFlag": "🇹🇭"
    },
    {
      "name": "French Southern Territories",
      "iso2": "TF",
      "iso3": "ATF",
      "unicodeFlag": "🇹🇫"
    },
    {
      "name": "Togo",
      "iso2": "TG",
      "iso3": "TGO",
      "unicodeFlag": "🇹🇬"
    },
    {
      "name": "Chad",
      "iso2": "TD",
      "iso3": "TCD",
      "unicodeFlag": "🇹🇩"
    },
    {
      "name": "Turks and Caicos Islands",
      "iso2": "TC",
      "iso3": "TCA",
      "unicodeFlag": "🇹🇨"
    },
    {
      "name": "Libya",
      "iso2": "LY",
      "iso3": "LBY",
      "unicodeFlag": "🇱🇾"
    },
    {
      "name": "Vatican",
      "iso2": "VA",
      "iso3": "VAT",
      "unicodeFlag": "🇻🇦"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "iso2": "VC",
      "iso3": "VCT",
      "unicodeFlag": "🇻🇨"
    },
    {
      "name": "United Arab Emirates",
      "iso2": "AE",
      "iso3": "ARE",
      "unicodeFlag": "🇦🇪"
    },
    {
      "name": "Andorra",
      "iso2": "AD",
      "iso3": "AND",
      "unicodeFlag": "🇦🇩"
    },
    {
      "name": "Antigua and Barbuda",
      "iso2": "AG",
      "iso3": "ATG",
      "unicodeFlag": "🇦🇬"
    },
    {
      "name": "Afghanistan",
      "iso2": "AF",
      "iso3": "AFG",
      "unicodeFlag": "🇦🇫"
    },
    {
      "name": "Anguilla",
      "iso2": "AI",
      "iso3": "AIA",
      "unicodeFlag": "🇦🇮"
    },
    {
      "name": "U.S. Virgin Islands",
      "iso2": "VI",
      "iso3": "VIR",
      "unicodeFlag": "🇻🇮"
    },
    {
      "name": "Iceland",
      "iso2": "IS",
      "iso3": "ISL",
      "unicodeFlag": "🇮🇸"
    },
    {
      "name": "Iran",
      "iso2": "IR",
      "iso3": "IRN",
      "unicodeFlag": "🇮🇷"
    },
    {
      "name": "Armenia",
      "iso2": "AM",
      "iso3": "ARM",
      "unicodeFlag": "🇦🇲"
    },
    {
      "name": "Albania",
      "iso2": "AL",
      "iso3": "ALB",
      "unicodeFlag": "🇦🇱"
    },
    {
      "name": "Angola",
      "iso2": "AO",
      "iso3": "AGO",
      "unicodeFlag": "🇦🇴"
    },
    {
      "name": "Antarctica",
      "iso2": "AQ",
      "iso3": "ATA",
      "unicodeFlag": "🇦🇶"
    },
    {
      "name": "American Samoa",
      "iso2": "AS",
      "iso3": "ASM",
      "unicodeFlag": "🇦🇸"
    },
    {
      "name": "Argentina",
      "iso2": "AR",
      "iso3": "ARG",
      "unicodeFlag": "🇦🇷"
    },
    {
      "name": "Australia",
      "iso2": "AU",
      "iso3": "AUS",
      "unicodeFlag": "🇦🇺"
    },
    {
      "name": "Austria",
      "iso2": "AT",
      "iso3": "AUT",
      "unicodeFlag": "🇦🇹"
    },
    {
      "name": "Aruba",
      "iso2": "AW",
      "iso3": "ABW",
      "unicodeFlag": "🇦🇼"
    },
    {
      "name": "India",
      "iso2": "IN",
      "iso3": "IND",
      "unicodeFlag": "🇮🇳"
    },
    {
      "name": "Aland Islands",
      "iso2": "AX",
      "iso3": "ALA",
      "unicodeFlag": "🇦🇽"
    },
    {
      "name": "Azerbaijan",
      "iso2": "AZ",
      "iso3": "AZE",
      "unicodeFlag": "🇦🇿"
    },
    {
      "name": "Ireland",
      "iso2": "IE",
      "iso3": "IRL",
      "unicodeFlag": "🇮🇪"
    },
    {
      "name": "Indonesia",
      "iso2": "ID",
      "iso3": "IDN",
      "unicodeFlag": "🇮🇩"
    },
    {
      "name": "Ukraine",
      "iso2": "UA",
      "iso3": "UKR",
      "unicodeFlag": "🇺🇦"
    },
    {
      "name": "Qatar",
      "iso2": "QA",
      "iso3": "QAT",
      "unicodeFlag": "🇶🇦"
    },
    {
      "name": "Mozambique",
      "iso2": "MZ",
      "iso3": "MOZ",
      "unicodeFlag": "🇲🇿"
    }
  ]

export const COUNTRY_NAMES = LIST_COUNTRIES.map(el => el.name);