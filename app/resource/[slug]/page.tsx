import ResourceCard from '@/components/ResourceCard'
import { Button } from '@/components/ui/button'
import { getResourceByID, getResources, getSimilarResource } from '@/sanity/action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page=async({ params }: { params: { slug: string } })=>{
  
  
  const resource= await getResourceByID({
    slug:params.slug
 })

 

 const similarResources= await getSimilarResource(
  resource.category
)

//console.log(similarResources)

  return (

    <div className="paddings w-full mx-auto max-w-screen-2xl flex-col items-center justify-center ">
        <section className='w-full nav-padding flex flex-col items-center justify-center hero-height  gap-16 lg:flex-row  text-white' id={params.slug}>

         <div className='mx-auto flex flex-1 flex-col items-start justify-center'>
            <p className='text-gradient_blue body-regular mb-2.5 text-center uppercase'>JAVASCRIPT MASTERY PRO FREE GUIDE</p>
            <h1 className='sm:heading2 heading3'>{resource.title}</h1>
            <div className='mt-6 text-[20px] text-white-800'>
              <ul className='paragraph-regular [&>li]:ml-8 [&>li]:list-disc'> 
                <p>With Over:</p>
                <li>17+ chapters packed with example source code</li>
                <li>comprehensive answers to popular interview questions</li>
                <li>best practices</li>
                <li>useful tips & tricks</li>
              </ul>
              <p>..this eBook is a must-have for any web devloper</p>
              </div>
            <div>
                <Link href={resource.downloadLink} className='gradient_purple flex-center body-semibold mt-10 h-fit w-fit gap-1 rounded-md px-6 py-4'>
                Download the Guide
              </Link> 
            </div>
            <div className='relative ml-28 mt-6 hidden h-[218px] w-[425px] lg:flex'>
              <p className='body-regular '>& More</p>
              <Image 
              alt='arrow' 
              width={0} 
              height={0} 
              src='/arrow_trail.svg'
              loading='lazy' decoding='async'
              className='absolute p-1 h-full w-full inset-0 no-focus text-white'
              />
            </div>
         </div>
          <div className='flex-1 flex-col lg:mb-12 justify-end'>
          <Image 
              alt='arrow' 
              width={400} 
              height={470} 
              src={resource.image}
              loading='lazy' decoding='async'
              className='text-transparent rounded-lg object-contain lg:rotate-12'
              />
          </div>
        </section>

        <section className="flex-center mt-2 w-full flex-col sm:mt-20 justify-between">
          <h1 className="heading3 self-start text-white-800 my-4">Similar Free Resources Like This</h1>
        
        <div className='mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start'>
        {similarResources && similarResources.map((resource: any) => (
       
      
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                  slug={resource.slug}
                />
        
      ))}
       </div>
      </section>
    </div>
    
  )}

export default page