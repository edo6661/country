import { cn } from '@/lib/cn';
import { Country } from '@/types/country';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'
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


  return (countries && countries.length > 0) ? (
    <div className={cn("card-shadow text-lg  absolute w-full rounded-[10px] ")}>
      {
        countries.slice(0, 5).map(({ name }) =>
          <div key={name.common} className="wrapper-result-search">
            <Link href={`/${name.common}`} >
              {name.common}
            </Link>
          </div>
        )
      }
    </div>
  )
    // TODO CHANGE TO SKELETON LOADING
    : isLoading ?
      <p className='p-7 card-shadow text-lg  absolute w-full rounded-[10px] animate-bounce'>Loading...</p>
      : q !== "" &&
      <p className="error card-shadow text-lg  absolute w-full rounded-[10px] animate-pulse">No Data found</p>

}

export default CardCountry