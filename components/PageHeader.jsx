import React from 'react'

const PageHeader = ({title, text}) => {
  return (
    <section className='py-10 md:py-16 bg-brand-500'>
      <div className='max-w-1/2 mx-auto px-4 md:px-0'>
        <h1 className='font-serif text-3xl md:text-4xl font-semibold text-center mb-4 text-surface-900'>{title}</h1>
        <p className='text-lg text-center font-sans text-surface-900'>{text}</p>
      </div>
    </section>
  )
}

export default PageHeader