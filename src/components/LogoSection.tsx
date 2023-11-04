import Image from 'next/image'
import React from 'react'
import Icon from '@/assets/icon-company.svg'
import IconMoon from '@/assets/icon-moon.svg'

const LogoSection: React.FC = () => {
    return (
        <div className='flex justify-between mb-2'>
            <div>
                <h1 className='text-[1.625rem] font-bold'>devfinder</h1>
            </div>
            <div className='flex gap-x-4 items-center justify-center'>
                <p>DARK</p>
                <Image src={IconMoon} alt='icon-moon' height={20} width={20} className='w-5 h-5'/>
            </div>
        </div>
    )
}

export default LogoSection;