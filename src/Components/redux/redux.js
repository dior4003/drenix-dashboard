import { useState } from "react";


const Redux =(action , value)=>{
    const [header, setHeader] = useState();
  const [section1, setSection1] = useState(null);
  const [section2, setSection2] = useState(null);
  const [section3, setSection3] = useState(null);
  const [section4, setSection4] = useState(null);
  const [sectoin5, setSectoin5] = useState(null);
  const [seaction6, setSeaction6] = useState(null);
  const [sectoin7, setSectoin7] = useState(null);
  const [section8, setSection8] = useState(null);
  const [section10, setSection10] = useState(null);
  const [footer, setFooter] = useState(null);

    if (action==="links") {
        
    } else {
        
    }
    switch (action) {
        case "links":setHeader({...header ,links:value})
        case "phone":setHeader({...header ,phone:value})
        case "phone_txt":setHeader({...header ,phone_txt:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
        case "links":setHeader({...header ,links:value})
    
    }



  const update ={
    header:header,
    section1:section1,
    section2:section2,
    section3:section3,
    section4:section4,
    sectoin5:sectoin5,
    seaction6:seaction6,
    sectoin7:sectoin7,
    section8:section8,
    section10:section10,
    footer:footer
  }

}
export default Redux