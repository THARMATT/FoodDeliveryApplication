import React from 'react'

export default function Card() {
  return (
<>
<div className="card" style={{"width": "18rem;"}}>
  <img src="" className="card-img-top w-3 h-2" alt="..." style={{objectFit:"contain !important"}}/>
  <div className="card-body">
    <p className="card-text">Some card's content.</p>
    <select className='m-2 h-50 bg-success'>{Array.from(Array(6),(e,i)=>{
        return(
            <option key={i+1} value={i+1}>{i+1}</option>
        )
    })}
    </select>
    <select className='m-2 h-50  bg-success rounded'>
        <option value='half'>Half</option>
        <option value='full'>Full</option>
    </select>
<div className='d-inline fs-5 h-100'>Total Price</div>
  </div>
</div></>
  )
}
