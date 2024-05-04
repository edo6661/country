"use client"
import Button from '@/components/shared/Button'
import { useParams, useRouter } from 'next/navigation'
import ArrowLeft from 'mdi-react/ArrowLeftIcon'
import { useCountry } from '@/hooks/useCountry'
import { useCallingCode } from '@/hooks/useCallingCode'
import { getCallingCode } from '@/utils/getCallingCode'
import { useCurrency } from '@/hooks/useCurrency'
import { getCurrency } from '@/utils/getCurrency'
import CardSpesificCountry from '../_components/CardSpesificCountry'
import Skeleton from 'react-loading-skeleton'

import { AnimatePresence, motion } from 'framer-motion'
import { baseAllProps } from '@/lib/framer-motion'


const SpesificCountry = () => {
  const { q } = useParams()
  const router = useRouter()

  const { countries } = useCountry(q as string);
  const slicedCountries = countries?.slice(0, 1)!
  const { callingCode } = useCallingCode(
    getCallingCode(slicedCountries)
  );
  const { currency } = useCurrency(getCurrency(slicedCountries))


  return (
    <AnimatePresence>
      <motion.section className='container-country'
        {...baseAllProps}

      >
        <Button className='flex-center gap-3'
          onClick={() => router.push(`/?q=${q}`)}
          size="lg"
          variant="primary"
        >
          <span>
            <ArrowLeft size={24} />
          </span>
          <span>
            Back to Homepage
          </span>
        </Button>
        {(countries && countries.length > 0) ? (
          slicedCountries.map((country) =>
            <CardSpesificCountry
              key={country.name.common}
              {...country}
              callingCode={callingCode!}
              currency={currency!}
            />
          )
          // TODO change into loading skeleton
        ) : (
          <>
            <div className='flex flex-col gap-2'>
              <div className="flex-center gap-4">
                <Skeleton className='min-w-[260px] h-[58px]' />
                <Skeleton className='min-w-[46px] h-[30px]' />
              </div>
              <div className='flex-center flex-wrap gap-4'>
                {Array.from({ length: 3 }, (_, i) =>
                  <Skeleton key={i} className='min-w-32 h-8' />
                )}
              </div>
            </div>
            {Array.from({ length: 2 }, (_, i) =>
              <div className='sm:flex-center gap-6' key={i}>
                <Skeleton className='big-skeleton' />
                <Skeleton className='big-skeleton' />
              </div>
            )}
          </>
        )}

      </motion.section>
    </AnimatePresence>
  )
}

export default SpesificCountry