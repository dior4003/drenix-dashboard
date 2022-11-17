import React from 'react'
import ContactCounter from '../DeafaultUi/ui/counter'
import NotifItem from './ui/NotifItem'

export default function Noflications({data}) {
  return (
    <div>
        <ContactCounter/>
        <div className="msg_container">
            {data?(data.map((item, i)=>(
                <NotifItem data={item} i={i} key={item._id}/>
            ))):(
                <div className="not_found">
                    <div className="title">
                        <h1 className="code">Malumotlar topilmadi </h1>
                        <p></p>
                    </div>
                </div>
            )}
            
        </div>
    </div>
  )
}
