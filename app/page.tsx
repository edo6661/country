"use client"

import { useCountry } from "@/hooks/useCountry";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Search from 'mdi-react/MagnifyIcon'
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import CardCountry from "./_components/CardCountry";
import { useDebouncedCallback } from "use-debounce";
import SearchCountry from "./_components/SearchCountry";
import { robotoMono } from "@/utils/font";

export default function Home() {
  const searchParams = useSearchParams();
  const { isLoading, isError, countries, error } = useCountry(
    searchParams.get('q') || ""
  );


  return (
    <section className="min-h-[90vh] relative ">
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
    </section>
  );
}
