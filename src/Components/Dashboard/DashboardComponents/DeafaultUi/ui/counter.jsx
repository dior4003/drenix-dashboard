import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactCounter() {
  return (
    <div className='contact_counter' >
        <div className="counter_box">
          <Link to="/massage">
            <div className="counter_item">
                  <h1>
                      0
                  </h1>
                  <p>Jo'natilgan Xabarlar</p>
            </div>
          </Link>
          <Link to="/questions">
            <div className="counter_item">
                  <h1>
                      0
                  </h1>
                  <p>Savollar</p>
            </div>
          </Link>
          <Link to="/notifications">
            <div className="counter_item">
                  <h1>
                      0
                  </h1>
                  <p>Bildirishnomalar</p>
            </div>
          </Link>
        </div>
        
    </div>
  )
}
