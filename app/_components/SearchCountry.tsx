import { cn } from '@/lib/cn';
import React, { useState } from 'react'
import Search from 'mdi-react/MagnifyIcon'
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const SearchCountry = (
) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [focused, setFocused] = useState(true);
  const handleSearch = useDebouncedCallback((q: string) => {

    const params = new URLSearchParams(searchParams);
    params.set('q', q);
    q ? params.set('q', q) : params.delete('q');
    router.replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="relative">
      <input type="text"
        onChange={(e) => handleSearch(e.target.value)} placeholder="Type any country name"
        autoFocus
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        defaultValue={
          searchParams.get('q') || ""
        }
      />
      <Search size={30} className={cn("absolute right-4 top-1/2 -translate-y-1/2 text-tertiaryWhite", {
        "text-primaryPurple": focused
      })} />
    </div>
  )
}

export default SearchCountry