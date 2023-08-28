import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Post = ({postIndex}) => {
  return (
    <div className="flex flex-col w-full border border-gray-100 max-h-72">
         <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-black border-2 rounded-full" />
            <div>Username</div>
        </div>
        <div className="w-4 select-none"><BsThreeDots className="text-lg"/></div>
        </div>
        <div className="w-full h-full bg-black aspect-square"></div>
        <div className='flex justify-between p-2'>
            <div className='flex space-x-2'>
                <div>like</div>
                <div>comment</div>
                <div>share</div>
            </div>
            <div>
                save
            </div>
        </div>
        <div className='px-2'>1000 likes</div>
        <div className='p-2'>
            <div className='flex flex-col space-y-1'>
            {
                new Array(3).fill(0).map((_, i) => (
                    <div key={i} className='flex space-x-2'>
                        <div className='font-medium'>username</div>
                        <div>comment {i + 1}</div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className='px-2'>
            3 hours ago
        </div>
        <div>
            <div>face emoji</div>
            <div>
                <input type='text' name='comment' id={`comment ${postIndex}`} />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Post
