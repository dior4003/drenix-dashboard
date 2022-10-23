import React from 'react'

export default function SearchForm() {
    return (
        <div className="search_box">
            <div className="search_box_item">
                <span className='phone_icon'><i className="fa-solid fa-phone text-primary fs-5"></i></span>
                <div className="box_text">
                    <span className='text_muted'>Free Consultant</span>
                    <span className='phone'><b>+36 55 540 069</b></span>
                </div>
                <div className="search_btns">
                    <span className='btn_border'><i className="fa-solid fa-magnifying-glass"></i></span>

                    {/* <span className='btn_border'><i className="fa-solid fa-right-to-bracket"></i></span> */}

                </div>
            </div>
        </div>
    )
}
