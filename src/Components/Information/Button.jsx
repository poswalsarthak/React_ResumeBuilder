import React from 'react'

export default function Button() {
  return (
    // ----------doint it wiht <div> we are passing a div which contain a component not just a component , remember that
    // 
    // <div>
    //   <button className='formbtn'>Submit</button>
    // </div>
    // -------------NOTEEEEE-------------

    // if passed the comp like this then ,a div with no name will be passed to cotaine div which will create prob when styling this button
    // event giving this button a class name will not resolve this
    // either remove the automated div ele or if wana access this button do it like
    // .container(main div in App.jsx) space .div_name_in_which_button_prsent space button{css prop}

    
    <button>Submit</button>
  )
}
