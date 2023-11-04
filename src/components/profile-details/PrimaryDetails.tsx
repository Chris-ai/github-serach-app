import React from 'react'

interface IProps {
    name: string,
    username: string,
    joinDate: string
}

const PrimaryDetails: React.FC<IProps> = ({name, username, joinDate}) => {
    return (
        <div className="flex gap-x-[20px] mb-3">
            <div className="w-[70px] h-[70px] bg-red-800 rounded-full">
                {/* <Image src={'https://github.com/images/error/octocat_happy.gif'} alt='avatar' height={70} width={70} className="h-[70px] w-[70px]" /> */}
            </div>
            <div className="flex flex-col gap-y-1.5">
                <div className="flex flex-col">
                        <h3 className="font-bold text-midnightblue">{name}</h3>
                        <p className="text-azure text-[13px]">{username}</p>
                </div>
                <p className="text-bluegray text-[13px]">{joinDate}</p>
            </div>
        </div>

    )
}

export default PrimaryDetails;