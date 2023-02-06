import { NextPage } from "next";
import { useEffect, useState } from "react";


import { Users } from "../components/Users";
import Layout from "../components/Layout";


const Home:NextPage = () => {

    const [users, setMyUsers] = useState<[]>([])

    useEffect(() => {
      setMyUsers(users)

      return () => {
        setMyUsers([])
      }
    }, [users])


    return (
        <Layout 
          title='Github Search' 
          description=''
          className="bg-gray-50 h-screen pb-10 pt-10"
          >
          
              <div className="w-full">
                  <div className="max-w-[1200px] mx-auto px-4">
                
                      <Users 
                        get={users}
                        update={setMyUsers}
                      />
                  </div>
              </div>
        </Layout>
    )
}


export default (Home);