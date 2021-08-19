import React from 'react'
import { useEffect, useState } from "react"


type PropsType ={
    fetchData : (tempSearch: string) => void
}

export const SearchBar = (props: PropsType) => {
    
      const [tempSearch, setTempSearch] = useState('')
      const [search, setSearch] = useState('')

      useEffect(() => {
        console.log('sync2')
        props.fetchData(search)
      }, [search])


    return (
        <div>
            <div>
                <input value={tempSearch} placeholder="search"
                    onChange={(e) => { setTempSearch(e.currentTarget.value) }}></input>
                <button onClick={() => {
                    setSearch(tempSearch)
                }}>find</button>
            </div>
            <button onClick={()=>{setSearch('') 
            setTempSearch("")}}>reset</button>
        </div>
    )
}
