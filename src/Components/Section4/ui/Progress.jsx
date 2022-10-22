import React from 'react'
import useCounter from '../../Hooks/counter'

export default function Progress({ data }) {
    const num = useCounter(100)
    return (
        <>{data.map((item, i) => (
            <li key={i} className="list_item">
                <div className='label'>
                    <span>{item.title}</span>
                    <span>{num < item.progress ? num : item.progress}%</span>
                </div>
                <span className="bar_item">
                    <span style={{ width: `${num < item.progress ? num : item.progress}%` }}></span>
                </span>
            </li>
        ))}</>
    )
}
