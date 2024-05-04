import React from 'react'
import HoveredCountries from './HoveredCountries'
interface SecondSectionSpesificCountryProps {
  currency: { name: string }[]
  setIsCurrencyOpen: (isOpen: boolean) => void
  isCurrencyOpen: boolean

}
const SecondSectionSpesificCountry = (
  { currency, setIsCurrencyOpen, isCurrencyOpen }: SecondSectionSpesificCountryProps
) => {
  return (
    <div
      className='relative'
    >
      <span className='underline-country'
        onMouseEnter={() => setIsCurrencyOpen(true)}
        onMouseLeave={() => setIsCurrencyOpen(false)}
      >{currency?.length} Countries</span>
      <span className='font-medium'>
        with this currency
      </span>
      <HoveredCountries
        isOpen={isCurrencyOpen}
        data={currency}
      />
    </div>
  )
}

export default SecondSectionSpesificCountry