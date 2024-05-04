import { Country } from '@/types/country'
import React from 'react'
interface CallingCodeType extends Pick<Country, "idd"> { }
const CallingCode = (
  { idd }: CallingCodeType
) => {
  return (
    <>
      <p className='caption'>
        Calling Code
      </p>
      <p className='title text-primaryPurple'>
        {idd.root.slice(1)}
        {idd.suffixes.map((suffix) => suffix)}
      </p>
    </>
  )
}

export default CallingCode