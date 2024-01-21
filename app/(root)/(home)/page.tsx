import Filters from '@/components/Filters'
import SearchForm from '@/components/SearchForm'
import React from 'react'
import {getResources, getResourcesPlaylist} from '@/sanity/action'
import ResourceCard from '@/components/ResourceCard'
import Header from '@/components/Header'

interface Props{
   searchParams: { [key: string ]: string | undefined }
}

export const revalidate=900;

const page = async({searchParams}:Props) => {

  // console.log(searchParams)
  const ressources= await getResources({
     query:searchParams?.query || '',
     category:searchParams?.category||'',
     page:'1',
  })

  const resourcesPLaylist= await getResourcesPlaylist()

  console.log(resourcesPLaylist)

  return (
    <main className="flex-center paddings mx-auto w-full max-screen-2xl flex-col">
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1  heading2 mn-6 text-center text-white'>Projects</h1>
        </div>
        <SearchForm />
      </section>

      <Filters/>

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ''}
            category={searchParams?.category || ''}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {ressources?.length > 0 ? (
              ressources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                  slug={resource.slug}
                                  />
              ))
            ): (
              <p className="body-regular text-white-400">
                No resources found
              </p>
            )}
          </div>
        </section>
      )}
     
     {resourcesPLaylist && resourcesPLaylist.map((item: any) => (
        <section key={item._id} className="flex-center mt-6 w-full flex-col sm:mt-20">
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources.map((resource: any) => (

                

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
      ))}

    </main>
  )
}

export default page