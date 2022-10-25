import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Loader from './Loader'
import MainSection from './Section1'
import Section10 from './Section10/Section10'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'

export default function Main() {
    const [loading ,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[loading])
    const [nav , setNav]=useState("col-6")
    const [search, setSearch]=useState(false)

    return (
        <div onClick={()=>setSearch(false)}>
        {loading? <Loader />:null}
           
            <Header nav={nav} setNav={setNav} search={search} setSearch={setSearch}/>
            <MainSection />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Footer />
        </div>
    )
}
