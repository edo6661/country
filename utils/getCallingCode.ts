import { Country } from "@/types/country";

export const getCallingCode = (countries: Country[]) =>
  countries
    ?.flatMap(({ idd }) => [idd.root.slice(1), ...idd.suffixes])
    .join("") as string;
