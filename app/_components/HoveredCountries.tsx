import { baseAllProps } from '@/lib/framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
interface HoveredCountriesProps {
  isOpen: boolean
  data: { name: string }[]
}
const HoveredCountries = (
  { isOpen, data }: HoveredCountriesProps
) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (data && data.length > 0) && (
          <motion.div
            {...baseAllProps}
            className='hovered-country'
          >
            {
              data.map((cd) =>
                <motion.p key={cd.name}>
                  {cd.name}
                </motion.p>
              )
            }
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default HoveredCountries