"use client";
import instance from "@/lib/axios";
import { Country } from "@/types/country";
import { errHandler } from "@/utils/errHandler";
import { useQuery } from "@tanstack/react-query";

export const useCountry = (q: string) => {
  const {
    isLoading,
    isError,
    data: countries,
    error,
  } = useQuery<Country[]>({
    queryKey: ["search-country", q],
    queryFn: async () => {
      try {
        return (await instance.get(q)).data;
      } catch (err) {
        errHandler(err, "Failed to fetch countries");
      }
    },
    enabled: !!q,
  });

  return { isLoading, isError, countries, error };
};
