/* eslint-disable @next/next/no-img-element */

type UserTypeListProps = { 
    user: {
        login: string;
        avatar_url: string;
        name:string;
    }
}

export function MyCards({user, ...rest}: UserTypeListProps) {
    
    return (
        <>
            <li {...rest} className={`mb-4 bg-white rounded-lg w-full sm:w-[220px] hover:shadow-2xl hover:transition-all transition-all cursor-pointer flex-1 basis-[200px] sm:flex-none`}>
                <div className={`relative bg-black mx-auto flex justify-center rounded-t-lg py-4`}>
                    <img width="96" height="96" className={`rounded-full border-2 border-white `} src={user?.avatar_url.length === 0 ? 'https://i.pinimg.com/originals/a2/c7/9c/a2c79cda7d8dd7f5ea717a282dab8654.png' : user.avatar_url} alt={user.name} />
                </div>
                <div className="px-4 py-0 pb-4 flex flex-col justify-between bg-black rounded-b-lg ">
                    <span className="text-center capitalize text-gray-200 text-sm">{user.login}</span>
                    <h3 className="w-full capitalize text-center text-white">{user.name}</h3>
                </div>
            </li>
        </>
    )
}

