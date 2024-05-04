import Button from '@/components/shared/Button'
import { cn } from '@/lib/cn'
import { baseTransition, baseVarAppear, baseVarProps } from '@/lib/framer-motion'
import { Country } from '@/types/country'
import { robotoMono } from '@/utils/font'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import HoveredCountries from './HoveredCountries'
import SecondSectionSpesificCountry from './SecondSectionSpesificCountry'
import FirstSectionSpesificCountry from './FirstSectionSpesificCountry'
import ThirdSectionSpesificCountry from './ThirdSectionSpesificCountry'
import CallingCode from './CallingCode'
import Currency from './Currency'

interface CardSpesificCountryType extends Country {
  callingCode: CallingCode[]
  currency: Currency[]
}

const CardSpesificCountry = ({
  name,
  flags,
  altSpellings,
  latlng,
  capital,
  region,
  subregion,
  idd,
  currencies, callingCode, currency
}: CardSpesificCountryType) => {
  const [isCcOpen, setIsCcOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)


  return (
    <div >
      <div className="wrapper-country">
        <div className="wrapper-country-second-section">
          <FirstSectionSpesificCountry
            name={name}
            flags={flags}
            altSpellings={altSpellings}
          />
        </div>
        <ThirdSectionSpesificCountry
          latlng={latlng}
          capital={capital}
          region={region}
          subregion={subregion}
        />
        <div className='wrapper-country-section'>
          <div className='wrapper-country-sub-section'>
            <CallingCode
              idd={idd}
            />
            <SecondSectionSpesificCountry
              currency={callingCode}
              setIsCurrencyOpen={setIsCcOpen}
              isCurrencyOpen={isCcOpen}
            />
          </div>
          <div className='wrapper-country-sub-section'>
            <Currency
              currencies={currencies}
            />
            <SecondSectionSpesificCountry
              currency={currency}
              setIsCurrencyOpen={setIsCurrencyOpen}
              isCurrencyOpen={isCurrencyOpen}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSpesificCountry