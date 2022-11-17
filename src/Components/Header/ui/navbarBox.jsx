import React from "react";
import { useState } from "react";

export default function NavbarBox({data, upd , }) {
  const [link ,setLink]=useState(data)
  
  const hendleChange = (index,e )=> {
    
    // console.log('index: ' + index);
    // console.log('property name: '+ e.target.name);
    let newArr = [...link]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = {
      ...newArr[index],
      title:e.target.value
    }; // replace e.target.value with whatever you want to change it to
    setLink(newArr);
  }
  console.log(link);
  return (
    <ul className="nav_list">
      {data.map((item, i) => (
          <li className="" key={i}>
            <span>
              <b>{upd? (
              <input 
                className="edit_input" 
                style={{width:`100px`}} 
                type="text" 
                name="name"
                value={link[i].title}
                onChange={(e)=>hendleChange(i ,e)}
              />
              )
              :item.title
              }
              </b>
            </span>
          </li>
      ))}
    </ul>
  );
}
