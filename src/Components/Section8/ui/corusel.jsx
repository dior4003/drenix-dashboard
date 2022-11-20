import React, { useState, useEffect } from "react";

const Card=(props)=>{
  const {section8 ,setSection8,item,i ,upd}=props
  return(
    <li className="card_" key={i}>
            <h2>
              {upd ? (
                <input
                  className="edit_input"
                  style={{
                    width: `${item.first_title.length * 10}px`,
                  }}
                  type="text"
                  value={section8.corusel[i].first_title}
                  onChange={(e) =>{
                    setSection8({
                      ...section8,
                      corusel: {
                        ...section8.corusel,
                        [i]: {
                          first_title: e.target.value,
                        },
                      },
                    })
                    console.log(item);
                  }
                    
                  }
                />
              ) : (
                item.first_title
              )}
            </h2>

            <p className="p">
              {upd ? (
                <textarea
                  className="edit_input"
                  style={{
                    width: `70%`,
                    height: `100px`,
                  }}
                  type="text"
                  value={section8.corusel[i].title}
                  onChange={(e) =>
                    setSection8({
                      ...section8,
                      corusel: {
                        ...section8.corusel,
                        [i]: {
                          title: e.target.value,
                        },
                      },
                    })
                  }
                ></textarea>
              ) : (
                item.title
              )}
            </p>

            <div className="author">
              <div className="icon">
                <img
                  src={`https://drenix-back.herokuapp.com/static/media/${item.icon}`}
                  alt=""
                />
              </div>
              <div className="text">
                <h4>
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{
                        width: `${item.name.length * 10}px`,
                        padding: "0px",
                      }}
                      type="text"
                      value={section8.corusel[i].name}
                      onChange={(e) =>
                        setSection8({
                          ...section8,
                          corusel: {
                            ...section8.corusel,
                            [i]: {
                              name: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  ) : (
                    item.name
                  )}
                </h4>
                <p>
                  {upd ? (
                    <input
                      className="edit_input"
                      style={{
                        width: `${item.name.length * 10}px`,
                        padding: "0px",
                      }}
                      type="text"
                      value={section8.corusel[i].spec}
                      onChange={(e) =>
                        setSection8({
                          ...section8,
                          corusel: {
                            ...section8.corusel,
                            [i]: {
                              spec: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  ) : (
                    item.spec
                  )}
                </p>
              </div>
            </div>
          </li>
  )
}

export function Corusel({ data, upd, section8, setSection8 }) {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(data);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);
  useEffect(() => {
    const interval = setInterval(() => {
      setMoveClass("prev");
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [moveClass]);

  const handleAnimationEnd = () => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  };

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass("next")} className="prev">
          <span className="material-icons">{"<-"}</span>
        </button>
        <button onClick={() => setMoveClass("prev")} className="next">
          <span className="material-icons">{"->"}</span>
        </button>
      </div>
      <ul
        onAnimationEnd={handleAnimationEnd}
        className={`${moveClass} carousel_`}
      >
        {carouselItems.map((item, i) => (
          // <li className="card_" key={i}>
          //   <h2>
          //     {upd ? (
          //       <input
          //         className="edit_input"
          //         style={{
          //           width: `${item.first_title.length * 10}px`,
          //         }}
          //         type="text"
          //         value={section8.corusel[i].first_title}
          //         onChange={(e) =>{
          //           setSection8({
          //             ...section8,
          //             corusel: {
          //               ...section8.corusel,
          //               [i]: {
          //                 first_title: e.target.value,
          //               },
          //             },
          //           })
          //           console.log(item);
          //         }
                    
          //         }
          //       />
          //     ) : (
          //       item.first_title
          //     )}
          //   </h2>

          //   <p className="p">
          //     {upd ? (
          //       <textarea
          //         className="edit_input"
          //         style={{
          //           width: `70%`,
          //           height: `100px`,
          //         }}
          //         type="text"
          //         value={section8.corusel[i].title}
          //         onChange={(e) =>
          //           setSection8({
          //             ...section8,
          //             corusel: {
          //               ...section8.corusel,
          //               [i]: {
          //                 title: e.target.value,
          //               },
          //             },
          //           })
          //         }
          //       ></textarea>
          //     ) : (
          //       item.title
          //     )}
          //   </p>

          //   <div className="author">
          //     <div className="icon">
          //       <img
          //         src={`https://drenix-back.herokuapp.com/static/media/${item.icon}`}
          //         alt=""
          //       />
          //     </div>
          //     <div className="text">
          //       <h4>
          //         {upd ? (
          //           <input
          //             className="edit_input"
          //             style={{
          //               width: `${item.name.length * 10}px`,
          //               padding: "0px",
          //             }}
          //             type="text"
          //             value={section8.corusel[i].name}
          //             onChange={(e) =>
          //               setSection8({
          //                 ...section8,
          //                 corusel: {
          //                   ...section8.corusel,
          //                   [i]: {
          //                     name: e.target.value,
          //                   },
          //                 },
          //               })
          //             }
          //           />
          //         ) : (
          //           item.name
          //         )}
          //       </h4>
          //       <p>
          //         {upd ? (
          //           <input
          //             className="edit_input"
          //             style={{
          //               width: `${item.name.length * 10}px`,
          //               padding: "0px",
          //             }}
          //             type="text"
          //             value={section8.corusel[i].spec}
          //             onChange={(e) =>
          //               setSection8({
          //                 ...section8,
          //                 corusel: {
          //                   ...section8.corusel,
          //                   [i]: {
          //                     spec: e.target.value,
          //                   },
          //                 },
          //               })
          //             }
          //           />
          //         ) : (
          //           item.spec
          //         )}
          //       </p>
          //     </div>
          //   </div>
          // </li>
          <Card setSection8={setSection8} section8={section8} i={i} item={item} upd={upd}/>
        ))}
      </ul>
    </div>
  );
}
