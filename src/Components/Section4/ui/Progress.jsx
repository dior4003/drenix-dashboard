import React from "react";
import useCounter from "../../Hooks/counter";

export default function Progress({ data, upd, section4, setSection4 }) {
  const num = useCounter(100);
  return (
    <>
      {data.map((item, i) => (
        <li key={i} className="list_item">
          <div className="label">
            <span>
              {upd ? (
                <input
                  className="edit_input"
                  style={{
                    width: `180px`,
                    marginTop: "20px",
                    padding: "0px",
                  }}
                  type="text"
                  name="name"
                  value={section4.skills[i].text}
                  onChange={(e) =>
                    setSection4({
                      ...section4,
                      skills: {
                        ...section4.skills,
                        [i]: {
                          text: e.target.value,
                        },
                      },
                    })
                  }
                />
              ) : (
                item.text
              )}
            </span>
            <span>
              {upd ? (
                <input
                  className="edit_input"
                  style={{
                    width: `${item.value}px`,
                    marginTop: "20px",
                    padding: "0px",
                  }}
                  type="text"
                  name="name"
                  value={section4.skills[i].value}
                  onChange={(e) =>
                    setSection4({
                      ...section4,
                      skills: {
                        ...section4.skills,
                        [i]: {
                          value: e.target.value,
                        },
                      },
                    })
                  }
                />
              ) : (
                item.value
              )}
              %
            </span>
          </div>
          <span className="bar_item">
            <span
              style={{ width: `${num < item.value ? num : item.value}%` }}
            ></span>
          </span>
        </li>
      ))}
      <li className="list_item">
        <div className="label">
          <span>
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `100px`,
                  marginTop: "20px",
                  padding: "0px",
                }}
                type="text"
                name="name"
              />
            ) : (
              ""
            )}
          </span>
          <span>
            {upd ? (
              <input
                className="edit_input"
                style={{
                  width: `100px`,
                  marginTop: "20px",
                  padding: "0px",
                }}
                type="text"
                name="name"
              />
            ) : (
              ""
            )}
            %
          </span>
        </div>
        <span className="bar_item">
          <span style={{ width: `0%` }}></span>
        </span>
      </li>
    </>
  );
}
