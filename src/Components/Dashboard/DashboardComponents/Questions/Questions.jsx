import React from 'react'
import ContactCounter from '../DeafaultUi/ui/counter'
import Items from './ui/Items'

export default function Questions() {
    const data =[
        {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfhgfh  fghngfngfng fngfnjmh jmhnmhg",
            createdAt:new Date(),
        },
        {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfhgfhf ghngfngfn gfngf njmh jmhnmhg",
            createdAt:new Date(),
        },
        {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfh fhfghng fngfng fngfnj mhjm hnmhg",
            createdAt:new Date(),
        },
         {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfh gfhfg hngfngfngfn gfnjmhj mhnmhg",
            createdAt:new Date(),
        },
        {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfhgf hfghngfn gfngf ngfnjm hjmhnmhg",
            createdAt:new Date(),
        }, {
            _id:"6373b72dea8c3f4872bb0007",
            phone:65665565,
            name:"tgrtgtrgtr",
            decr:"ggfhg fhfg hngf ngfngf ngfnj mhjmhnmhg",
            createdAt:new Date(),
        },
    ]
  return (
    <div>
        <ContactCounter/>
        <div className="msg_container">
            {data?(data.map((item, i)=>(
                <Items data={item} i={i} key={item._id}/>
            ))):null}
            
        </div>
    </div>
  )
}
