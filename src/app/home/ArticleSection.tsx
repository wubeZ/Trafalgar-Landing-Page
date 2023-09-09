import React from 'react'
import ArticleCard from '../components/ArticleCard'
import vector from '@/assets/images/Vector (6).svg'
import Image from 'next/image'
import ButtonCard from '../components/ButtonCard'

const ArticleSection = () => {
  return (
    <div className='flex flex-col relative gap-8 items-center mt-40 mb-12'>
        <Image src={vector} alt='vector' className='absolute -z-10 right-0 top-20'/>
        <p className='text-3xl text-center lg:text-left font-semibold'>Check out our latest articles</p>
        <p className="border-b-2 border-slate-800 w-14"></p>
        <div className='flex flex-col lg:flex-row gap-8 mt-12'>
            {new Array(3).fill(0).map((item, index)=> [
                <ArticleCard key={index} />
            ])}
        </div>
        <ButtonCard text={"View all"} />
    </div>
  )
}

export default ArticleSection