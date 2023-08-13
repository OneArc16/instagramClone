import {BsSearch} from 'react-icons/bs'
import {Add, Cross, Home, Heart, Messenger, Search, Compass,  } from '../Header/HeaderIcons';
import HeaderIcon from '../Header/Headericon';

const HEADER_ITEMS = [
  {
    icon: Home,
    url: '/',
    name: 'Home',
  },
  {
    icon: Messenger,
    url: '/',
    name: 'Messenger',
  },
  {
    icon: Add,
    url: '/',
    name: 'Add',
  },
  {
    icon: Compass,
    url: '/',
    name: 'Discover',
  },
  {
    icon: Heart,
    url: '/',
    name: 'Likes',
  }
]

const Feed = () => {
  return (
  <div className='w-full h-full bg-[#FAFAFA]'>
    <header className='flex items-center justify-around w-full h-16 bg-white shadow-md'>
        <div className='text-xl font-semibold tracking-wider'>Instagram</div>
        <div className='flex items-center px-2 space-x-4 bg-gray-100 border border-gray-400 rounded-lg group-focus:border-gray-400 group'>
          <label htmlFor='search' className=''><BsSearch className='text-lg text-gray-400' /></label>
            <input type='search' name='search' id='search' className='w-full px-2 py-1 transition bg-gray-100 rounded-sm outline-none hover:bg-transparent focus:bg-transparent placeholder:text-sm' placeholder='Search'/>
        </div>
        <div>
          <div className='flex space-x-4'>
          {HEADER_ITEMS.map((item) => (
                <HeaderIcon Icon={item.icon} key={item.name} />
            ))}
          </div>
        </div>
    </header>
  </div>
  );
}

export default Feed
