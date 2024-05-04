interface Currency {
  name: string;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  "2019": number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Ind;
  bre: Ind;
  ces: Ind;
  cym: Ind;
  deu: Ind;
  est: Ind;
  fin: Ind;
  fra: Ind;
  hrv: Ind;
  hun: Ind;
  ita: Ind;
  jpn: Ind;
  kor: Ind;
  nld: Ind;
  per: Ind;
  pol: Ind;
  por: Ind;
  rus: Ind;
  slk: Ind;
  spa: Ind;
  srp: Ind;
  swe: Ind;
  tur: Ind;
  urd: Ind;
  zho: Ind;
}

interface Languages {
  ind: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  IDR: IDR;
}

interface IDR {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  ind: Ind;
}

interface Ind {
  official: string;
  common: string;
}
