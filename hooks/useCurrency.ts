"use client";
import instance from "@/lib/axios";
import { errHandler } from "@/utils/errHandler";
import { useQuery } from "@tanstack/react-query";

export const useCurrency = (q: string) => {
  const {
    isLoading,
    isError,
    data: currency,
    error,
  } = useQuery<Currency[]>({
    queryKey: ["currency", q],
    queryFn: async () => {
      try {
        return (await instance.get(`/v2/currency/${q}`)).data;
      } catch (err) {
        errHandler(err, "Failed to fetch currency");
      }
    },
    enabled: !!q,
  });

  return { isLoading, isError, currency, error };
};
