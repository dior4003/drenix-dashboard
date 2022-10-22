import React from 'react'

export default function Card({card}) {
  return (
      <>
          {card.map((item, i) => (
              <div key={i} className="card_item" style={{ background: `url(${item.img})` }}>
                  <div className="card_title">
                      <h3>
                          {item.name}
                      </h3>
                  </div>
                  <div className="card_btn">
                      <span>Learn More{" ->"}</span>
                  </div>
              </div>
          ))}
      </>
  )
}
