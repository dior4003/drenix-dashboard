import { useEffect, useState } from "react";

const Redux = (action, value) => {
  const [data, setData] = useState(null);

  // section3 = data ? data.section3 : null,
  // section4 = data ? data.section4 : null,
  // sectoin5 = data ? data.sectoin5 : null,
  // seaction6 = data ? data.seaction6 : null,
  // sectoin7 = data ? data.sectoin7 : null,
  // section8 = data ? data.section8 : null,
  // section10 = data ? data.section10 : null,
  // footer = data ? data.footer : null;
  useEffect(() => {
    if (action === "head") {
      setData({
        ...data,
        header: value,
      });
    } else if (action === "section1") {
      setData({
        ...data,
        section1: value,
      });
    } else if (action === "section2") {
      setData({
        ...data,
        section2: value,
      });
    }else if (action === "section3") {
      setData({
        ...data,
        section3: value,
      });
    }
  });
  
  // if (action === "links") {
  //   header = {
  //     ...header,
  //     link: value,
  //   };
  //   console.log(value, action);
  // }
  // if (action === "links") {
  //   header = {
  //     ...header,
  //     link: value,
  //   };
  //   console.log(value, action);
  // }
  // let update = {
  //   header: header,
  //   section1: section1,
  //   section2: section2,
  // section3: section3,
  // section4: section4,
  // sectoin5: sectoin5,
  // seaction6: seaction6,
  // sectoin7: sectoin7,
  // section8: section8,
  // section10: section10,
  // footer: footer,
  // };
  // console.log(data);
};

export default Redux;
