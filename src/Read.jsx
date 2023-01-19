import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { API_URL } from './URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



export default function Read() {
    const navigate=useNavigate()
    const[content,setContent]=useState([])


    const deleteUser=async(id)=>{
       await axios.delete(API_URL + id)
        callApi()
      }

      const UpdateUser=async(id)=>{
         navigate('/update')
       }
      

const callApi=async()=>{
    const resp=await axios.get(API_URL)
    setContent(resp.data);
}


useEffect(()=>{
callApi()
},[])

    return (
    <div>
      <Table>
        <TableHead className='thead'>
          <TableRow>
              <TableCell>First Name:</TableCell>
            <TableCell>Last Name:</TableCell>
            <TableCell>checked:</TableCell>
            <TableCell>Update:</TableCell>
            <TableCell>Delete:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tbody'>
            {content.map((data)=>
            <TableRow>
              <TableCell>{data.first}</TableCell>
              <TableCell>{data.last}</TableCell>
              <TableCell>{data.checked ? 'checked' : 'not checked'}</TableCell>
              <TableCell><button className='btn' onClick={()=>UpdateUser(data.id)}>Update</button></TableCell>
              <TableCell><button className='btn' onClick={()=>deleteUser(data.id)}>delete</button></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </div>
  );
}
