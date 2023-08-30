import React, { useEffect, useState } from 'react'
import {Route, Router, useNavigate} from 'react-router-dom'
import InfoShow from './InfoShow';


export default function BasicInfo() {
  const[formData,setFormData] = useState(
    {
      username:"",
      email:"",
      phone:"",
      location:"",
      educationboard:"",
      graduationoptions:"",
      postgraduationoptions:"",
      skills:[],
      extracurricular:[]

    }
  )
  // const[state,setstate]=useState(false);

  const navigate = useNavigate();

  const handleInput=(event)=>{
    const name = event.target.name; 
    const value = event.target.value;
  

  setFormData((prev)=>{
    return {...prev , [name]:value };
  });
}

function submit() {
  const s = formData.skills.split(",").map(skill => skill.trim()); // Split and trim skills
  const e = formData.extracurricular.split(",").map(activity => activity.trim()); // Split and trim extracurricular activities
  
  setFormData(prev => ({
    ...prev,
    skills: s,
    extracurricular: e
  }));

  // setstate(true);
  navigate('/infoshow',{state:{data : formData}});
}

// useEffect(()=>{
//   document.querySelector(".values").innerHTML= ` Name : ${formData.username} Email : ${formData.email} Number : ${formData.phone} Location : ${formData.location} EduBoard : ${formData.educationboard}, Graduate : ${formData.graduationoptions}, PG : ${formData.postgraduationoptions} ,Skills : ${formData.skills} Extra : ${formData.extracurricular}`;
// },[formData])


  return (
      <div className='basicinfo'>
      <form >
        <label>Name : <input type="text" name="username" value={formData.username} onChange={handleInput} required></input></label>
        <label>Email : <input type="email" name="email" value={formData.email} onChange={handleInput} required></input></label>
        <label>Phone No. : <input type="text" name="phone" value={formData.phone} onChange={handleInput} required></input></label>
        <label>Location : <input type="text" name="location" value={formData.location} onChange={handleInput} required></input></label>
        <label>Education : <br></br>
            <p>Education Board : </p>
            <select className='educationboard' name='educationboard' value={formData.educationboard} onChange={handleInput}>
                <option>Select one</option>
                <option>CBSE</option>
                <option>UP</option>
                <option>Any Other</option>
            </select><br></br>
            <p>Graduation : </p>
            <select className='graduationoptions' name='graduationoptions' value={formData.graduationoptions} onChange={handleInput}>
                <option>Select one</option>
                <option>Computers</option>
                <option>Arts</option>
                <option>Any Other</option>
            </select><br></br>
            <p>Post Graduation : </p>
            <select className='postgraduationoptions' name='postgraduationoptions' value={formData.postgraduationoptions} onChange={handleInput}>
                <option>Select one</option>
                <option>Computers</option>
                <option>Arts</option>
                <option>Any Other</option>
            </select>

        </label>
        <label>Skills : 
            <input type="text" name="skills" placeholder='enter comma seperated values' value={formData.skills} onChange={handleInput} required></input> 
            {/* NOTE :: must have the input closing tag like <input></input> ... <input/> will not take value into the desired var.  */}
        </label>
        <label>Extracurricular : 
            <input type="text" name="extracurricular" placeholder='enter comma seperated values' value={formData.extracurricular} onChange={handleInput} required></input>
        </label>
      </form>
      
    </div>
  )
}
