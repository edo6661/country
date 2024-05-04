"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const SpesificCountry = () => {
  const { q } = useParams()
  return (
    <section>
      <h1>Spesific Country</h1>
      {q}
    </section>
  )
}

export default SpesificCountry