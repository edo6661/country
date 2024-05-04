import { Country } from "@/types/country";

export const getCurrency = (countries: Country[]) =>
  countries
    ?.flatMap(({ currencies }) =>
      Object.keys(currencies).map((currency) => currency)
    )
    .join(", ") as string;
