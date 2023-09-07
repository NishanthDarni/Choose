import React from 'react'
import '../css/search.css'
import SearchIcon from '@mui/icons-material/Search';
import {useState,useEffect} from 'react'
import axios from 'axios'
import { ClassNames } from '@emotion/react';
import { ClickAwayListener } from '@mui/material';
function Search(props) {
  const [data,setData]=useState('')
  const clear=()=>{
    const box=document.querySelector('#mobile'+props.box)
     box.innerHTML="<div>+</div>"
     box.style.background='none'
     box.style.backgroundColor='skyblue';
     box.querySelector('div').addEventListener('click',function (){
     props.setTrigger(true)
     })
     const feature=['Display size','Display resolution','Camera pixels','Video pixels','RAM size','Chipset','Battery size','Battery type']
     feature.forEach((e)=>{
      document.querySelector('.'+e.split(' ').join('')+props.box).innerHTML=''
     })
  }
  const fill=(id)=>{ 
    return async function()
    {
      const resp=await axios.post('http://localhost:5000/getMobile',{idd:id})
      props.setTrigger(false)
      //DisplaySize
      console.log(resp.data)
      const  display=resp.data.detailSpec[3].specifications[1]
      console.log('#mobile'+props.box)
      const box=document.querySelector('#mobile'+props.box)
      box.style.backgroundColor='white';
      box.innerHTML='<div class="mobileClose">X</div>'
      box.querySelector('.mobileClose').addEventListener('click',function (){
        clear()
      })
      box.style.background="url("+resp.data.img+")"
      box.style.backgroundSize='cover'
      resp.data.quickSpec.forEach((e)=>{
        document.querySelector('.'+e.name.split(' ').join('')+props.box).innerHTML=e.value 
      })
      // document.querySelector('.'+resp.data.quickSpec[4].name.split(' ').join('')+props.box).innerHTML=resp.data.quickSpec[4].value 
    }
  }
  const search=async (event)=>{
    const parent=document.querySelector(".search_result")
    parent.innerHTML=''
    event.preventDefault()
    const resp=await axios.post('http://localhost:5000/search/',{ dataa: data })
    if(resp.data.length==0)
    {
      parent.innerHTML="No results found"
    }else{
      resp.data.forEach((e)=>{
        let node=document.createElement('div')
        let hor=document.createElement('hr')
        node.classList.add('result')
        let desc=document.createElement('div')
        desc.innerHTML=e.description
        let img=new Image()
        img.src=e.img
        img.classList.add('result_img')
        node.appendChild(img)
        node.appendChild(desc)
        parent.appendChild(node)
        node.addEventListener('click',fill(e.id))
        parent.appendChild(hor)
      })
    }
  }
  return props.trigger?
  (

    <div className='search_container'>
        <form onSubmit={search}>
        <div className="search_bar">
            <input type="text" value={data} onChange={(event)=>{setData(event.target.value);}} className="input" />
            <button type="submit" style={{backgroundColor:"white",border:"0px",borderRadius:"100%"}}><SearchIcon/></button>
            <button className='close' onClick={()=>{props.setTrigger(false)}}>Close</button>
        </div>
        </form>
        <div className="search_result"></div>
    </div>
  ):''
}

export default Search