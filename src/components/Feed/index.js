import React from 'react'

const Feed = () => {
  return  <div className='w-full h-full bg-[#FAFAFA]'>
    <header className='flex justify-around w-full h-24 bg-white shadow-2xl'>
        <div>Instagram</div>
        <div>
            <input type='search' name='search' id='search' className='w-full px-2 py-1 transition bg-gray-100 border rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm focus:border-gray-400'/>
        </div>
        <div>
            All the icons over here
        </div>
    </header>
  </div>

}

export default Feed
