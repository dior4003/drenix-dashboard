import React from "react";
import Contact from "./ui/Contact";
import Corusel from "./ui/corusel";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Section10({ data }) {
  const notif = () => {
    toast.success("Send message", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <section className="section_10">
      <div className="title">
        <h1>{data ? data.title1 : ""}</h1>
      </div>
      <div id="corusel">
        <Corusel data={data.corusel ? data.corusel : []} />
      </div>
      <Contact datas={data.contact ? data.contact : []} notif={notif} />
      <ToastContainer />
    </section>
  );
}
