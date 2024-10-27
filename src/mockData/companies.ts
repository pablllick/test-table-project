import { CompanyT } from "../types/CompanyT";

const companies: CompanyT[] = [
  {
    checked: true,
    name: "ТехКорп",
    address: "ул. Вязовая, 1234",
    id: crypto.randomUUID(),
  },
  {
    checked: false,
    name: "ЗдоровьеПлюс",
    address: "ул. Дубовая, 5678",
    id: crypto.randomUUID(),
  },
  {
    checked: true,
    name: "ЭкоЭнерджи",
    address: "ул. Сосновая, 9101",
    id: crypto.randomUUID(),
  },
  {
    checked: false,
    name: "ЭдуСмарт",
    address: "пр. Кленовый, 1213",
    id: crypto.randomUUID(),
  },
  {
    checked: true,
    name: "ФинСервис",
    address: "пр. Берёзовый, 1415",
    id: crypto.randomUUID(),
  },
  {
    checked: false,
    name: "ФудиХаб",
    address: "ул. Кедровая, 1617",
    id: crypto.randomUUID(),
  },
  {
    checked: true,
    name: "АвтоФикс",
    address: "ул. Ореховая, 1819",
    id: crypto.randomUUID(),
  },
  {
    checked: false,
    name: "СветлыйМир",
    address: "ул. Ивовая, 2021",
    id: crypto.randomUUID(),
  },
  {
    checked: true,
    name: "ЗелТех",
    address: "ул. Красное Дерево, 2223",
    id: crypto.randomUUID(),
  },
  {
    checked: false,
    name: "МедиКвик",
    address: "ул. Каштановая, 2425",
    id: crypto.randomUUID(),
  },
];

export default companies;
