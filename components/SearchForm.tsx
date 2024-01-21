"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { formUrlQuery } from '@/sanity/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const SearchForm = () => {


    const searchParams= useSearchParams()
    const router= useRouter()
    const pathname=usePathname()

    const [search,setSearch]=useState('');

  
  useEffect(() => {
    const delayDebounceFn=setTimeout(()=>{
       
        let newUrl='';

            if(search){
                newUrl=formUrlQuery({
                    params:searchParams.toString(),
                    key : 'query',
                    value : search
                })
            }else {
                newUrl = formUrlQuery({
                  params: searchParams.toString(),
                  keysToRemove: ['query']
                })
            }
            console.log("push")
            router.push(newUrl,{scroll:false})
     },30)
  
    return () => clearTimeout(delayDebounceFn)
  }, [search])
  

  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label htmlFor="searchbar" className="flex-center relative w-full max-w-3xl">
            <Image
                src="/magnifying-glass.svg"
                className='absolute left-8'
                alt="Search Icon"
                width={32}
                height={32}
            />
            <Input
                className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800 '
                type='text'
                placeholder='search'
                value={search}
                id="searchbar"
                onChange={(e)=>{
                    //console.log(e.target.value)
                    setSearch(e.target.value)
                }}
            />
        </label>
    </form>
  )
}

export default SearchForm