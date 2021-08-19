import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import SideBar from './SideBar';
import { SearchBar } from './SearchBar';
import Details from './Details';

export type SearchUserType = {
  login: string
  id: number
}
export type SearchResult = {
  items: SearchUserType[]
}
export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}

const App = () => {

  const fetchData = (term: string) => {
    if (term === "") {
      setUsers([])
    }
    else{
      axios.get<SearchResult>(`https://api.github.com/search/users?q=${term}`)
      .then(res => { setUsers(res.data.items) })
    }
  }
  
  const [users, setUsers] = useState<SearchUserType[]>([])

  const [userDetails, setUserDetails] = useState<UserType | null>(null)



  return (
    <div className="App">
      <div className="SideBar">
        <SearchBar fetchData={fetchData} />
        <SideBar setUserDetails={setUserDetails} users={users} />
      </div>
      <div className="UserInfo">
        <Details userDetails={userDetails}/>
      </div>
    </div>
  );
}

export default App;
