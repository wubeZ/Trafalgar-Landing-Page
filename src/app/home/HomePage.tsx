import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import ProvideSection from './ProvideSection'
import DownloadSection from './DownloadSection'
import TestimonalSection from './TestimonalSection'
import ArticleSection from './ArticleSection'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center'>
    <HeroSection/>
    <ServiceSection/>
    <ProvideSection/>
    <DownloadSection/>
    <TestimonalSection/>
    <ArticleSection/>
    </div>

  )
}

export default HomePage