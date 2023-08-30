import React from 'react'
import './App.css'
import FormHeading from './Components/FormHeading'
import BasicInfo from './Components/Information/BasicInfo'
import { Routes,Route } from 'react-router-dom'
import InfoShow from './Components/Information/InfoShow'
import Button from './Components/Information/Button'



export default function App() {
  return (

    <Routes>
      <Route 
       path='/'
        element = {
          <div className='container'> 
            <FormHeading heading = "Enter Details Below : "/> 
            <BasicInfo/> 
            <Button/>
         </div>} />
      {/* to make 2 comp render on same page which are inside same div then put the comp inside same div inside Route like above the below wont work if in same div */}
      {/* <Route path='/' element = {<div className='container'> <BasicInfo/> </div> }/> */}
      
      <Route path='/infoshow' element ={ <InfoShow/> }/>
    </Routes>
  )
}
