"use client";
import instance from "@/lib/axios";
import { Country } from "@/types/country";
import { errHandler } from "@/utils/errHandler";
import { useQuery } from "@tanstack/react-query";

export const useCallingCode = (q: string) => {
  const {
    isLoading,
    isError,
    data: callingCode,
    error,
  } = useQuery<CallingCode[]>({
    queryKey: ["calling-code", q],
    queryFn: async () => {
      try {
        return (await instance.get(`/v2/callingcode/${q}`)).data;
      } catch (err) {
        errHandler(err, "Failed to fetch calling code");
      }
    },
    enabled: !!q,
  });

  return { isLoading, isError, callingCode, error };
};
