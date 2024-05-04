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
    <section className='container-country'>
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
        countries.slice(0, 1).map((country) =>
          <CardSpesificCountry
            key={country.name.common}
            {...country}
            callingCode={callingCode!}
            currency={currency!}
          />
        )
        // TODO change into loading skeleton
      ) : <p>Loading</p>}

    </section>
  )
}

export default SpesificCountry