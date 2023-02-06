/* eslint-disable @next/next/no-img-element */
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


export function UsersInformations({user, update}: any){ 

        return (
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay"/>
                <Dialog.Content className="DialogContent relative">
                <div className="flex">
                    <div className="bg-white absolute -top-12 left-4 rounded-full ">
                        <img width="96" height="96" className='rounded-full' src={user?.avatar_url?.length === 0 ? 'https://i.pinimg.com/originals/a2/c7/9c/a2c79cda7d8dd7f5ea717a282dab8654.png' : user.avatar_url} alt={user.name} />
                    </div>
                </div>
                <div className="flex flex-col mt-8 w-full">
                        <Dialog.Title className="text-3xl capitalize items-center flex gap-2">
                            {user.name}
                        </Dialog.Title> 
                        <Dialog.Description>
                            {user.bio} | {user.location}
                        </Dialog.Description>
                        <div className="flex items-center gap-2 mt-2">
                            {user.email && <h2>E-mail: {user.email}</h2>} 
                        </div>
                        <div className="flex justify-center items-start gap-2 mt-2">
                            <h2>Repositories: {user.public_repos && <span> {user.public_repos} -</span>}</h2>
                            <h2>Followers: {user.followers && <span> {user.followers} -</span>}</h2>
                            <h2>Following: {user.following && <span> {user.following}</span>}</h2>
                        </div>
                        <div className='mt-5'>
                        
                        </div>
                        <Dialog.Close asChild>
                            <button className="IconButton" aria-label="Close">
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>   
        )
}