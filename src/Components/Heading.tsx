import React from 'react'
interface propsType {
    title: string
}

const Heading: React.FC<propsType> = ({}) => {
  return (
    <div className='pl-[200px] text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>My Project</p>
    </div>
  )
}

export default Heading
