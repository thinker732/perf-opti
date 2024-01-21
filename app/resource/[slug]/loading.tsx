import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (

        <div className="paddings w-full mx-auto max-w-screen-2xl flex-col items-center justify-center ">
            <section className='w-full nav-padding flex flex-col items-center justify-center hero-height  gap-16 lg:flex-row  text-white' >
    
             <div className='mx-auto flex flex-1 flex-col items-start justify-center'>
             <Skeleton className="h-[20px] w-[150px] rounded-lg bg-white my-3" />
                <Skeleton className="h-[90px] w-full rounded-lg bg-white my-3" />
                <div className='mt-6 text-[20px] text-white-800'>
                  <div className='paragraph-regular [&>li]:ml-8 [&>li]:list-disc'> 
                   <Skeleton className="h-[90px] w-full rounded-lg bg-white my-3" />
                   <Skeleton className="h-[20px] w-[150px] rounded-lg bg-white my-3" />
                   <Skeleton className="h-[20px] w-[300px] rounded-lg bg-white my-3" />
                   <Skeleton className="h-[20px] w-[120px] rounded-lg bg-white my-3" />
                   <Skeleton className="h-[20px] w-[250px] rounded-lg bg-white my-3" />
                  </div>
                  <Skeleton className="h-[20px] w-full rounded-sm bg-white" />
                  </div>
                <div>
                 <Skeleton className="h-[15px] w-full rounded-lg bg-white" />
                </div>
                <Skeleton className='relative ml-28 mt-6 hidden h-[218px] w-[425px] lg:flex bg-white'/>
             </div>
              <div className='flex-1 flex-col lg:mb-12 justify-end'>
              <Skeleton className="w-[400px] h-[470px] rounded-lg bg-white text-transparent rounded-lg object-contain lg:rotate-12" />
              </div>
            </section>
    
            <section className="flex-center mt-2 w-full flex-col sm:mt-20 justify-between">
              <h1 className="heading3 self-start text-white-800 my-4">Similar Free Resources Like This</h1>
            
            <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
            <Skeleton className="h-[274px] w-full rounded-lg bg-white" />
            <Skeleton className="h-[274px] w-full rounded-lg bg-white" />
           </div>
          </section>
        </div>
        
      )
}

export default loading