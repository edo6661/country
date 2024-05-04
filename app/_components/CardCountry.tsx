import { cn } from '@/lib/cn';
import { baseAllProps, baseVarAppear, baseVarProps, resultAllProps } from '@/lib/framer-motion';
import { Country } from '@/types/country';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
interface CardCountryProps {
  countries: Country[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;

}
const CardCountry = (
  { countries, isLoading, isError, error }: CardCountryProps
) => {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || ""


  return <AnimatePresence>
    {(countries && countries.length > 0) ? (
      <motion.div className={cn("card-shadow text-lg  absolute w-full rounded-[10px] ")}
        {...baseAllProps}
      >
        {
          countries.slice(0, 5).map(({ name }, i) =>
            <motion.div key={name.common} className="wrapper-result-search"
              {...resultAllProps}
              transition={{
                delay: 0.1 * i,
                duration: 0.2
              }}
            >
              <Link href={`/${name.common}`} >
                {name.common}
              </Link>
            </motion.div>
          )
        }
      </motion.div>
    )
      // TODO CHANGE TO SKELETON LOADING
      : isLoading ?
        <motion.div className='absolute w-full h-full'
          {...baseVarProps}
        >
          <Skeleton className='p-7 card-shadow  w-full h-full rounded-[10px] animate-bounce mt-10'
          />
        </motion.div>
        : q !== "" &&
        <motion.p className="error card-shadow text-lg  absolute w-full rounded-[10px] animate-pulse"
          {...baseVarAppear}
        >No Data found</motion.p>}
  </AnimatePresence>

}

export default CardCountry