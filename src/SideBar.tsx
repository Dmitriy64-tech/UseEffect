import React from 'react'
import { useEffect, useState } from "react"
import { SearchUserType, UserType } from './App'
import axios from 'axios';

type PropsType ={
    setUserDetails: ( user: UserType | null) => void
    users: SearchUserType[]
}

const SideBar = (props:PropsType) => {

    const [selectedUser, setselectedUser] = useState<SearchUserType | null>(null)


    useEffect(() => {
        console.log('sync1')
        if (selectedUser) {
          document.title = selectedUser.login
        }
      }, [selectedUser])
    
      useEffect(() => {
        console.log('sync3')
        if (selectedUser) {
          axios.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
            .then(res => { props.setUserDetails(res.data) })
        }
    
      }, [selectedUser])

    return (
        <div>
            <ul>
          {props.users.map((i:SearchUserType) => <li key={i.id}
            className={selectedUser === i ? 'selected' : ''}
            onClick={() => {
              setselectedUser(i)
            }}>{i.login}</li>)}
        </ul>
        </div>
    )
}

export default SideBar
