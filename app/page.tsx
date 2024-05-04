"use client"

import { useCountry } from "@/hooks/useCountry";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import CardCountry from "./_components/CardCountry";
import SearchCountry from "./_components/SearchCountry";
import { robotoMono } from "@/utils/font";
import { baseAllProps } from "@/lib/framer-motion";

export default function Home() {
  const searchParams = useSearchParams();
  const { isLoading, isError, countries, error } = useCountry(
    searchParams.get('q') || ""
  );


  return (
    <motion.section className="min-h-[90vh] relative "
      {...baseAllProps}
    >
      <div className="container-index">
        <h1 className={cn("heading", robotoMono.className)}>
          Country
        </h1>
        <div className="wrapper-index">
          <SearchCountry
          />
          <CardCountry
            countries={countries!}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
        </div>
      </div>
    </motion.section>
  );
}
