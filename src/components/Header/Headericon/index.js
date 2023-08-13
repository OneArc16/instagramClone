import React from 'react'

const HeaderIcon = ({Icon, name}) => {
  return (
    <div className='p-2 text-black transition rounded cursor-pointer hover:text-white hover:bg-black'>
        <Icon className='' size={25}/>
    </div>
  )
}

export default HeaderIcon
