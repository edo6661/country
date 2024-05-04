import React from 'react'
interface CurrencyType extends Pick<Currency, "currencies"> { }
const Currency = (
  { currencies }: CurrencyType
) => {
  return (
    <>
      <p className='caption'>
        Currency
      </p>
      <p className='title text-primaryPurple'>
        {Object.keys(currencies).map((currency) => currency).join("")}
      </p>
    </>
  )
}

export default Currency