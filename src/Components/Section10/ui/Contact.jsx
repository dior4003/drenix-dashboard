import React, { useState } from "react";

export default function Contact({ notif, datas }) {
  const [isValue, setIsValue] = useState("phone"),
    [data, setData] = useState({
      phone: "",
      userName: "",
      name: "",
      decr: "",
    });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    notif();
  };
  return (
    <div className="contact">
      <div className="number_box">
        <div className="titl">
          <h1>{datas.title1}</h1>
        </div>
        <div className="phone">
          <h1>{datas.phone}</h1>
        </div>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="contact_input">
            <div className="name_input">
              <div className="phone_int">
                <span onClick={() => setIsValue("phone")}>
                  <i className="fa-solid fa-phone"></i>
                </span>
              </div>
              <div className="tg_int">
                <span onClick={() => setIsValue("tg")}>
                  {" "}
                  <i className="fa-brands fa-telegram"></i>
                </span>
              </div>
            </div>
            <div className="contact_int">
              <input
                id="contact"
                type={isValue === "phone" ? "number" : "text"}
                placeholder={
                  isValue === "phone"
                    ? `${datas.intName[0]}`
                    : `${datas.intName[1]}`
                }
                value={isValue === "phone" ? data.phone : data.userName}
                onChange={
                  isValue === "phone"
                    ? (e) => setData({ ...data, phone: e.target.value })
                    : (e) => setData({ ...data, userName: e.target.value })
                }
                required={true}
                name="contact"
              />
              <label htmlFor="contact"> {datas.label}</label>
            </div>
          </div>
          <div className="team_input">
            <div className="text_int">
              <input
                type="text"
                placeholder={datas.place1}
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
                placeholder={datas.place2}
                value={datas.decr}
                onChange={(e) => setData({ ...data, decr: e.target.value })}
                min={50}
                required={true}
              />
            </div>
          </div>
          <div className="submit">
            <button>{datas.btn}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
