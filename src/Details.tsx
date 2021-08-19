import React from 'react'
import { useEffect, useState } from "react"
import { UserType } from './App'
import './Details.css'

type PropsType ={
    userDetails: UserType | null 
}


const Details = (props: PropsType) => {
    return (
        <div>
            <h2 className="Title">{props.userDetails?.login}</h2>
            {props.userDetails && <div>
                <img className="GitAvatar" src={props.userDetails.avatar_url} />
                <br />
                Followers: {props.userDetails.followers}
            </div>}
        </div>
    )
}


export default Details
