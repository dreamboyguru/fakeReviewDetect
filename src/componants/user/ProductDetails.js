import React from 'react'
import ReviewPage from './Review'

const ProductDetails = ({modelShow}) => {
  return (
    <div className="absolute inset-0 flex justify-center bg-gray-950 bg-opacity-50">
            <div className="relative bg-white rounded-lg p-8 w-2/3 mt-10">
                <div className='absolute text-2xl right-4 top-1 hover:scale-110 text-red-600 cursor-pointer'
                    onClick={modelShow}
                >X</div>
                <h2 className="text-xl font-bold mb-4">Title</h2>
                    <div className='flex flex-row space-x-4 mb-5'>
                        <div className='w-1/2 h-auto flex items-center pl-16'>
                            <img src='https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/tiger-hill-1680516074_a0a74c97dfcd912c936f.webp' className='w-2/3 h-48'></img>
                        </div>
                        <div className=' w-1/2 flex flex-col justify-between h-auto text-left'>
                            <label><span className='font-semibold'>Product Name : </span>Heaven</label>
                            <span><span className='font-semibold'>Rating : </span><span className='text-yellow-600 text-2xl'>*****</span> </span>
                            <h1><span className='font-semibold'>Product Details : </span><span>In marketing, a product is an object, or system, or service made available for consumer use as of the consumer demand; it is anything that can be offered to a market to satisfy the desire or need of a customer.</span></h1>
                        </div>
                    </div>
                    <div className='border-2 h-96 overflow-y-auto'>
                        <ReviewPage />
                    </div>
            </div>
        </div>
  )
}

export default ProductDetails
