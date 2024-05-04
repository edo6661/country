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

export default function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((q: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('q', q);
    q ? params.set('q', q) : params.delete('q');
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  const [focused, setFocused] = useState(true);
  const { isLoading, isError, countries, error } = useCountry(
    searchParams.get('q') || ""
  );


  return (
    <section className="min-h-[90vh] relative ">
      <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 space-y-10">
        <h1 className="heading ">
          Country
        </h1>
        <div className="w-[700px] space-y-10">
          <div className="relative">
            <input type="text" className=" h-[60px] rounded-[10px] w-full"
              onChange={(e) => handleSearch(e.target.value)} placeholder="Type any country name"
              autoFocus
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              defaultValue={
                searchParams.get('q') || ""
              }
            />
            <Search size={30} className={cn("absolute right-4 top-1/2 -translate-y-1/2 text-tertiaryWhite", {
              "text-primaryPurple": focused
            })} />
          </div>
          <div className={cn("bg-primaryWhite h-[228px] text-lg text-primaryBlack primary-shadow  absolute w-full")}>
            <CardCountry
              countries={countries!}
              isLoading={isLoading}
              isError={isError}
              error={error}
              q={
                searchParams.get('q') || ""
              }
            />
          </div>
        </div>
      </div>


    </section>
  );
}
