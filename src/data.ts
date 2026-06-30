export interface OfferItem {
  id: string;
  title: string;
  description: string;
  iconName: 'cake' | 'award' | 'chef' | 'utensils' | 'calendar' | 'cookie';
}

export interface CakeItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  content: string;
  date: string;
}

export const OFFERS: OfferItem[] = [
  {
    id: 'ciasta',
    title: 'Ciasta domowe',
    description: 'Tradycyjne wypieki według rodzinnych receptur. Puszyste serniki, aromatyczne szarlotki, drożdżówki pełne kruszonki oraz wyjątkowe ciasta przekładane kremem.',
    iconName: 'cake'
  },
  {
    id: 'okolicznosciowe',
    title: 'Wypieki okolicznościowe',
    description: 'Artystycznie zdobione torty i ciasta na chrzciny, komunie, wesela, jubileusze i urodziny. Każdy wypiek dopasowujemy do indywidualnych życzeń klienta.',
    iconName: 'award'
  },
  {
    id: 'garmazeria',
    title: 'Garmażeria',
    description: 'Tradycyjne potrawy przygotowywane z najwyższej jakości świeżych produktów. Pyszne domowe pierogi, chrupiące krokiety, gołąbki oraz pieczenie pachnące majerankiem.',
    iconName: 'utensils'
  },
  {
    id: 'tradycyjne',
    title: 'Tradycyjne wyroby',
    description: 'Własnoręcznie przygotowywane specjały, które przywołują smak dzieciństwa. Bez sztucznych konserwantów i polepszaczy smaku — czysta tradycja w każdym kęsie.',
    iconName: 'chef'
  },
  {
    id: 'zamowienie',
    title: 'Produkty na zamówienie',
    description: 'Dostosujemy naszą ofertę do Twojego menu. Przygotujemy pakiety potraw i wypieków na domowe przyjęcia, święta czy spotkania w gronie przyjaciół.',
    iconName: 'calendar'
  },
  {
    id: 'slodkie-stoly',
    title: 'Słodkie stoły',
    description: 'Kompleksowa aranżacja deserowa na Twoją imprezę. Mini-deserki, babeczki, ptysie i makaroniki, które zachwycą Twoich gości smakiem i wyjątkowym wyglądem.',
    iconName: 'cookie'
  }
];

export const CAKES: CakeItem[] = [
  {
    id: 'orzechowe',
    name: 'Orzechowe z karmelem',
    image: 'https://i.ibb.co/LD1wQ8DZ/588394097-122097555447136316-4601116834085491923-n.jpg',
    description: 'Delikatne ciasto orzechowe przełożone kremem i wykończone aksamitnym karmelem.',
    tags: ['Karmel', 'Orzechy włoskie', 'Kremowa rozkosz']
  },
  {
    id: 'oreo',
    name: 'Sernik Oreo',
    image: 'https://i.ibb.co/s79hwtd/588722105-122097555549136316-241752297020309244-n.jpg',
    description: 'Kremowy sernik z dodatkiem ciasteczek Oreo, idealny dla miłośników słodkich deserów.',
    tags: ['Czekoladowy spód', 'Kremowy ser', 'Ciasteczka Oreo']
  },
  {
    id: 'pomaranczowe',
    name: 'Ciasto pomarańczowe',
    image: 'https://i.ibb.co/hJdSCpYJ/587055399-122097547683136316-2858735629695295399-n.jpg',
    description: 'Delikatny krem z pomarańczą, galaretką oraz kawałkami skórki pomarańczowej.',
    tags: ['Owocowa świeżość', 'Pomarańcza', 'Lekka galaretka']
  },
  {
    id: 'czekoladowe',
    name: 'Ciasto czekoladowe',
    image: 'https://i.ibb.co/1YSkY0Mb/588478057-122097555459136316-5872430428203881493-n-1.jpg',
    description: 'Ulubieniec najmłodszych – intensywnie czekoladowe ciasto pełne smaku.',
    tags: ['Czekolada premium', 'Wilgotne ciasto', 'Uwielbiane przez dzieci']
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Domowe receptury',
    description: 'Wszystkie przepisy pochodzą z rodzinnego zeszytu, przekazywane z pokolenia na pokolenie dla zachowania autentyczności.'
  },
  {
    title: 'Świeże składniki',
    description: 'Używamy wyłącznie wiejskich jaj, prawdziwego masła, świeżych owoców oraz sprawdzonych, lokalnych produktów.'
  },
  {
    title: 'Wysoka jakość',
    description: 'Bez kompromisów, sztucznych aromatów i ulepszaczy. Jakość jest dla nas najważniejsza i czuć to w każdym kęsie.'
  },
  {
    title: 'Tradycyjne smaki',
    description: 'Nasze wyroby pachną domem, dzieciństwem i ciepłem domowego ogniska. Przywracamy autentyczne polskie smaki.'
  },
  {
    title: 'Indywidualne podejście',
    description: 'Każde zlecenie traktujemy wyjątkowo. Dostosowujemy smak, dekorację i porcje do indywidualnych potrzeb.'
  },
  {
    title: 'Produkcja na bieżąco',
    description: 'Nie mrozimy i nie magazynujemy produktów. Wszystko przygotowujemy bezpośrednio na Twoje zamówienie.'
  },
  {
    title: 'Atrakcyjne ceny',
    description: 'Oferujemy rzemieślniczą jakość premium w uczciwych, przystępnych cenach dostosowanych do każdego budżetu.'
  },
  {
    title: 'Lokalna marka',
    description: 'Jesteśmy dumni, że tworzymy dla mieszkańców Wołomina i okolic, budując zaufaną, sąsiedzką społeczność.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Katarzyna Wiśniewska',
    location: 'Wołomin',
    rating: 5,
    content: 'Zamówiłam ciasto orzechowe z karmelem na chrzciny i to był absolutny hit! Goście nie mogli się nachwalić. Smakuje niesamowicie naturalnie, czuć prawdziwe masło i chrupiące orzechy. Z całego serca polecam!',
    date: '12 czerwca 2026'
  },
  {
    id: 'rev-2',
    author: 'Tomasz Kowalski',
    location: 'Kobyłka',
    rating: 5,
    content: 'Najlepsze pierogi i krokiety, jakie jadłem od lat. Farsz jest doprawiony w punkt, a ciasto cienkie i mięciutkie. Garmażeria z najwyższej półki, zamawiamy regularnie na niedzielne rodzinne obiady.',
    date: '28 maja 2026'
  },
  {
    id: 'rev-3',
    author: 'Anna Radzikowska',
    location: 'Wołomin',
    rating: 5,
    content: 'Sernik Oreo po prostu rozpływa się w ustach! Nie za słodki, aksamitny, zrobiony po mistrzowsku. Kontakt z właścicielami przemiły, zamówienie gotowe dokładnie na czas. Na pewno będziemy wracać po więcej.',
    date: '3 czerwca 2026'
  },
  {
    id: 'rev-4',
    author: 'Marek Banaszek',
    location: 'Zielonka',
    rating: 5,
    content: 'Prawdziwy smak tradycji! W dzisiejszych czasach trudno o tak uczciwe wypieki bez chemii. Ciasto pomarańczowe to prawdziwa poezja smaku – orzeźwiające i pyszne. 10/10!',
    date: '19 czerwca 2026'
  }
];
