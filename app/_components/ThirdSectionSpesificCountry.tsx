import { Country } from '@/types/country'
import Image from 'next/image'
import React from 'react'
interface ThirdSectionSpesificCountryProps extends Partial<Country> { }
const ThirdSectionSpesificCountry = (
  {
    latlng,
    capital,
    region,

    subregion,

  }: ThirdSectionSpesificCountryProps
) => {
  return (
    <div className='wrapper-country-section'>
      <div className='wrapper-latlong'>
        <p className='caption'>LatLong</p>
        <div className="flex-center ">
          {latlng?.map((latlng, i) =>
            <p key={i} className='title text-primaryPurple'>{i === 0 ? latlng + ", " : latlng}</p>
          )}
        </div>
        <Image
          src="/globe.svg"
          alt="globe"
          width={204}
          height={120}
          className='absolute -right-2 -bottom-16'
        />
      </div>
      <div className='wrapper-capital'>
        <p>
          Capital: <span >{capital}</span>
        </p>
        <p>
          Region: <span >{region}</span>
        </p>
        <p>
          Subregion: <span >{subregion}</span>
        </p>
      </div>
    </div>
  )
}

export default ThirdSectionSpesificCountry