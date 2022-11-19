import { useEffect, useState } from "react";

const Fetched=()=>{
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(`https://drenix-back.herokuapp.com/${localStorage.getItem("lang")}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data[0]);
        });
    });
    return data
}

export default Fetched