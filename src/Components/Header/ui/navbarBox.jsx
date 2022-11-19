import React from "react";
import { useState } from "react";

export default function NavbarBox({ data, upd, setArr }) {
  const [link, setLink] = useState(data);

  const hendleChange = (index, e) => {
    let newArr = [...link];
    newArr[index] = {
      ...newArr[index],
      title: e.target.value,
    };
    setLink(newArr);
  };
  setArr(link);

  return (
    <ul className="nav_list">
      {data.map((item, i) => (
        <li className="" key={i}>
          <span>
            <b>
              {upd ? (
                <input
                  className="edit_input"
                  style={{ width: `${item.title.length * 10}px` }}
                  type="text"
                  name="name"
                  value={link[i].title}
                  onChange={(e) => hendleChange(i, e)}
                />
              ) : (
                item.title
              )}
            </b>
          </span>
        </li>
      ))}
    </ul>
  );
}
