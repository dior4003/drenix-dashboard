import React, { useState } from 'react'


export default function Contact({ notif }) {
    const [isValue, setIsValue] = useState("phone"),
        [data, setData] = useState(
            {
                phone: "",
                userName: "",
                name: "",
                decr: ""
            }
        );
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        notif()

    }
    return (
        <div className='contact'>
            <div className="number_box">
                <div className="title">
                    <h1>Let's make something
                        beautiful together</h1>
                </div>
                <div className="phone">
                    <h1>+44 920 090 505</h1>
                </div>
            </div>
            <div className="form">
                <form onSubmit={onSubmit} >
                    <div className="contact_input">
                        <div className="name_input">
                            <div className="phone_int">
                                <span onClick={() => setIsValue("phone")}><i className="fa-solid fa-phone"></i></span>
                            </div>
                            <div className="tg_int">
                                <span onClick={() => setIsValue("tg")}> <i className="fa-brands fa-telegram"></i></span>
                            </div>
                        </div>
                        <div className="contact_int">
                            <input id='contact'
                                type={isValue === "phone" ? "number" : "text"}
                                placeholder={isValue === "phone" ? "Phone Number" : "Telegram Username"}
                                value={isValue === "phone" ? data.phone : data.userName}
                                onChange={
                                    isValue === "phone" ?
                                        (e) => setData({ ...data, phone: e.target.value, })
                                        : (e) => setData({ ...data, userName: e.target.value })
                                }
                                required={true}
                                name="contact" />
                            <label htmlFor="contact"> Your Contact</label>
                        </div>

                    </div>
                    <div className="team_input">
                        <div className="text_int">
                            <input
                                type="text"
                                placeholder='Your Name'
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                min={4}
                                required={true}
                            />
                        </div>
                        <div className="text_int">
                            <textarea
                                id="noter-text-area"
                                name="textarea"
                                placeholder='Your Subject'
                                value={data.decr}
                                onChange={(e) => setData({ ...data, decr: e.target.value })}
                                min={50}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="submit">
                        <button>Send</button>
                    </div>

                </form>
            </div>

        </div>
    )
}
