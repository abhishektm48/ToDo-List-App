import React,{useContext} from 'react'
import { AppContext } from '../Appcontext'

function Two(props) {
    const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:'250px'}}>
        <h1>Layer Two {data} </h1>
    </div>
  )
}

export default Two