import { Country } from '@/types/country';
import Link from 'next/link';
import React from 'react'
interface CardCountryProps {
  countries: Country[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  q: string;

}
const CardCountry = (
  { countries, isLoading, isError, error, q }: CardCountryProps
) => {
  return (
    <>
      {(countries && countries?.length > 0) ? countries?.slice(0, 5).map(({ name }) =>
        <div key={name.common} className=" hover:bg-secondaryWhite transition-all duration-300 px-4 py-2">
          <Link href={`/${name.common}`} className='w-full block'>
            {name.common}
          </Link>
        </div>
      ) : isLoading ? <p>Loading...</p> : q !== "" && <p className="error">No Data found</p>}
      {isError && <p>{error?.message}</p>}
    </>
  )
}

export default CardCountry