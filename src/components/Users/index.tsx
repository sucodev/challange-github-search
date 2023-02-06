import { MdSearch } from 'react-icons/md';
import { BsPlusCircle } from 'react-icons/bs'

import * as Dialog from '@radix-ui/react-dialog';
import { MyCards } from '../MyCards';
import { useState } from 'react';
import { apiInstance } from '../../backend';
import { UsersInformations } from '../UsersInformations';

export function Users({get, update}: any) {
  const [current, setCurrent] = useState({})
  const [user, setUser] = useState('');

  const handleClick = async () => {
    const response = await apiInstance.get(`${user}`);
    update([...get, response.data])
    setUser('')
  } 


    return (
        <>
                <div className="flex items-start flex-col mt-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                    <MdSearch/>
                    Github Search
                    </h2>
                    <div className='flex gap-4 items-center w-full mt-4'>
                      <input className='p-2 pl-4 flex-1 w-full rounded-full' value={user} type="text" placeholder="Adicione um usuário" onChange={(e) => setUser(e.target.value) } />
                      <button onClick={handleClick} className="p-2 rounded-full text-red-500 border-2 border-red-500 cursor-pointer flex items-center gap-2 bg-red-100">
                      <BsPlusCircle />
                      Adicionar
                      </button>
                    </div>
                  </div>
                
                {get && get.length === 0 && <p className="mt-5 text-center">Você não pesquisou por nenhum usuário.</p>}

                <Dialog.Root>
                  <ul className="flex flex-wrap gap-4 mt-4 justify-start">
                      {get && get.map((user:any) => (
                        <Dialog.Trigger asChild key={user.id} onClick={(e) => setCurrent(user)}>
                             <MyCards user={user} />
                        </Dialog.Trigger>
                      ))}
                  </ul>
                  <UsersInformations user={current} update={update}/>
              </Dialog.Root>

            </>
    )
}