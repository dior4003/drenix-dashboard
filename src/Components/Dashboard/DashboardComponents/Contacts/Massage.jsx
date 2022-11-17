import React from 'react'

export default function Massage({data}) {
  return (
    
        <div className="container-2">
        <p className="number"><i className="fa-solid fa-phone text-primary fs-5"></i></p>
        <h2>{data.name}</h2>
        <a rel="noreferrer" target="_blank" href={data.phone||data.username}>{data.phone||data.username}</a>
        <p className="text">{data.decr}</p>
        <div className="buttons">
            <button className='btn-1'>ochirish</button>
            <button className='btn-2'>korildi</button>
        </div>
        
        </div>
  )
}
