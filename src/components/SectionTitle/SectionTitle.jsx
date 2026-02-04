import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=' text-center my-12 w-2/3 md:w-3/12 mx-auto'>
            <p className='text-amber-400'>---{subHeading}---</p>
            <h3 className='text-3xl py-4 uppercase font-bold  mt-2 border-y-4 border-gray-300'>{heading}</h3>
        </div>
    )
}

export default SectionTitle
