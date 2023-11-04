import SearchIcon from '@/assets/icon-search.svg'
import Image from 'next/image'

const Searchbar = () => {
    return (
        <div className="flex bg-white rounded-[15px] gap-x-2 pl-4 pr-2 py-2 items-center">
            <Image src={SearchIcon} alt='icon-search' height={20} width={20} className='w-5 h-5' />
            <input type='text' placeholder='Search GitHub username...' className='text-[13px] flex-1 text-steelblue outline-none' />
            <button className='bg-azure p-3 rounded-[10px] text-white text-[14px] font-bold'>Search</button>
        </div>
    )
}

export default Searchbar;