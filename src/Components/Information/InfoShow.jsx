import React from 'react'
import { useLocation } from 'react-router-dom';

export default function InfoShow() {
    const location = useLocation();
    const data = location.state.formData;
    var value= 'newone'
  return (
    <div>
        <p>Name : {data.username}</p>
        <p>Email : {data.email}</p>
        <p>Number : {data.phone}</p>
        <p>Location : {data.location}</p>
        <p>EduBoard : {data.educationboard}</p>
        <p>Graduate : {data.graduationoptions}</p>
        <p>PG : {data.postgraduationoptions}</p>
        <p>Skills : {data.skills}</p>
        <p>Extra : {data.extracurricular}</p>
    </div>
  )
}