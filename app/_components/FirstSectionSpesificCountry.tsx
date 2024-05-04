import Button from '@/components/shared/Button'
import { cn } from '@/lib/cn'
import { Country } from '@/types/country'
import { robotoMono } from '@/utils/font'
import Image from 'next/image'
import React from 'react'
interface FirstSectionSpesificCountryType extends Partial<Country> { }
const FirstSectionSpesificCountry = (
  { name, flags, altSpellings }: FirstSectionSpesificCountryType
) => {
  return (
    <>
      <div>
        <h1 className={cn("title", robotoMono.className)}>
          {name?.common}
        </h1>
        <Image
          src={flags?.png!}
          alt={name?.common!}
          width={46}
          height={36}
        />
      </div>
      <div >
        {altSpellings?.map((alt) =>
          <Button key={alt} variant="secondary" size="md" className='w-fit'>
            {alt}
          </Button>
        )}
      </div>
    </>
  )
}

export default FirstSectionSpesificCountry