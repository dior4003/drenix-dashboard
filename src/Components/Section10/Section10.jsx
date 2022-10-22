import React from 'react'
import Contact from './ui/Contact'
import Corusel from './ui/corusel'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Section10() {
    const notif = () => {
        toast.success('Send message', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <section className='section_10'>

            <div className="title">
                <h1>Step forward to become one of <span>49,494</span>successful clients</h1>
            </div>
            <div id="corusel">
                <Corusel />
            </div>
            <Contact notif={notif} />
            <ToastContainer />
        </section>
    )
}
