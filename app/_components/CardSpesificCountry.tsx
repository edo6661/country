import Button from '@/components/shared/Button'
import { baseTransition, baseVarAppear, baseVarProps } from '@/lib/framer-motion'
import { Country } from '@/types/country'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

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
}: Country & { callingCode: CallingCode[], currency: Currency[] }) => {
  const [isCcOpen, setIsCcOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  return (
    <div >
      <div className="wrapper-country">
        <div className="wrapper-country-second-section">
          <div >
            <h1 className='title'>
              {name.common}
            </h1>
            <Image
              src={flags.png}
              alt={name.common}
              width={46}
              height={36}
            />
          </div>
          <div >
            {altSpellings.map((alt) =>
              <Button key={alt} variant="secondary" size="md" className='w-fit'>
                {alt}
              </Button>
            )}
          </div>
        </div>
        <div className='wrapper-country-section'>
          <div className='wrapper-latlong'>
            <p className='caption'>LatLong</p>
            <div className="flex-center ">
              {latlng.map((latlng, i) =>
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
        <div className='wrapper-country-section'>
          <div className='wrapper-country-sub-section'>
            <p className='caption'>
              Calling Code
            </p>
            <p className='title text-primaryPurple'>
              {idd.root.slice(1)}
              {idd.suffixes.map((suffix) => suffix)}
            </p>
            <div className='relative'>
              <span className='underline-country'
                onMouseEnter={() => setIsCcOpen(true)}
                onMouseLeave={() => setIsCcOpen(false)}
              >{callingCode?.length} {callingCode && callingCode?.length > 1 ? "countries" : "country"}</span>
              <span className='font-medium'>
                with this calling code
              </span>
              <AnimatePresence>
                {isCcOpen && (callingCode && callingCode.length > 0) && (
                  <motion.div
                    variants={baseVarAppear}
                    {...baseVarProps}
                    {...baseTransition}
                    className='hovered-country'
                  >
                    {
                      callingCode.map((cd) =>
                        <motion.p key={cd.name}>
                          {cd.name}
                        </motion.p>
                      )
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className='wrapper-country-sub-section'>
            <p className='caption'>
              Currency
            </p>
            <p className='title text-primaryPurple'>
              {Object.keys(currencies).map((currency) => currency).join("")}
            </p>
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
              <AnimatePresence>
                {isCurrencyOpen && (currency && currency.length > 0) && (
                  <motion.div
                    variants={baseVarAppear}
                    {...baseVarProps}
                    {...baseTransition}
                    className='hovered-country'
                  >
                    {
                      currency.map((cur) =>
                        <motion.p key={cur.name}>
                          {cur.name}
                        </motion.p>
                      )
                    }
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSpesificCountry