import React from 'react'
import { useState,useEffect } from 'react'
import { API_URL } from './URL'
import axios from 'axios'

const Update = () => {
    const[first,setFirst]=useState('')
const[last,setLast]=useState('')
const[checked,setChecked]=useState(false)
const[id,setId]=useState('')



const updateUser=async(id)=>{
    await axios.put(API_URL+id,{first,last,checked})
}

useEffect(()=>{
setId(localStorage.getItem('id'))
setFirst(localStorage.getItem('first'))
setLast(localStorage.getItem('last'))
setChecked(localStorage.getItem('checked'))
},[])


  return (
    <div className='form'>
        
    <label>First Name:</label><input onChange={((e)=>setFirst(e.target.value))} /><br/><br/>
    <label>Last Name:</label><input onChange={((e)=>setLast(e.target.value))} /><br/><br/>
    <label>Terms & condtions:</label><input type='checkbox' checked={checked} onChange={((e)=>setChecked(e.target.checked))} /><br/><br/>
    <button onClick={updateUser} className='btn'>submit</button>
    </div>
  )
}

export default Update
