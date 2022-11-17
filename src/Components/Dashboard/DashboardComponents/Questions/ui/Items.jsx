import React from 'react'

export default function Items({data}) {
  return (
    <div class="container-2">
    <p class="number">?</p>
    <h2>{data.name}</h2>
    <a rel="noreferrer" target="_blank" href={data.phone||data.username}>{data.phone||data.username}</a>
    <p class="text">{data.decr}</p>
    <div className="buttons">
      <button className='btn-1'>ochirish</button>
      <button className='btn-2'>korildi</button>
    </div>
    
  </div>
  )
}
