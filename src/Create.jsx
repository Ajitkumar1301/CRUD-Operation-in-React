import React, { useState } from 'react'
import axios from 'axios'
import {API_URL} from './URL'
import { useNavigate } from 'react-router-dom'


const Create = () => {
const navigate=useNavigate()
const[first,setFirst]=useState('')
const[last,setLast]=useState('')
const[checked,setChecked]=useState(false)


const postData=async()=>{
    await axios.post(API_URL,{first,last,checked},
    navigate('/read'));
}

  return (
    <div className='form'>
      <label>First Name:</label><input onChange={((e)=>setFirst(e.target.value))} /><br/><br/>
      <label>Last Name:</label><input onChange={((e)=>setLast(e.target.value))} /><br/><br/>
      <label>Terms & condtions:</label><input type='checkbox' checked={checked} onChange={((e)=>setChecked(e.target.checked))} /><br/><br/>
      <button onClick={postData} className='btn'>submit</button>
    </div>
  )
}

export default Create
