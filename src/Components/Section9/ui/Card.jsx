import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({data}) {
  return (
      <div className="card_box">
          {data.map((item, i) => (
              <div key={i} className="card">
                  <div className="content">
                      <img src={item.content.link} alt="" />
                  </div>
                  <div className="teg_buttons">
                      <Link to={item.link}>
                          <i className="fa-regular fa-user"></i>
                          <span>{item.author}</span>
                      </Link>
                      <Link to={item.link}>
                          <i className="fa-regular fa-comments"></i>
                          <span>Comments <span>{item.comment.length}</span></span>

                      </Link>
                  </div>
                  <div className="title">
                      <h1>{item.title}</h1>
                  </div>
                  <div className="decr">
                      <p>{item.decr}</p>
                  </div>
                  <hr />
                  <Link to={item.link} className='links'>
                      <span>READ  MORE</span>
                      <span>{"->"}</span>
                  </Link>
              </div>
          ))}

      </div>
  )
}
