import React, { useEffect, useRef, useState } from "react";

const OTP = ({ digits }) => {
  const arr = Array(digits).fill("");
  const [data, setData] = useState(arr);
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (e, ind) => {
    // if(e.target.key)
    const value = e.target.value;

    if (isNaN(e.target.value)) {
      return;
    }


    const newArr = [...data];
    const newValue = value.trim();
    newArr[ind] = newValue.slice(-1);
    setData(newArr);

    {newValue && refArr.current[ind + 1]?.focus()};
  };
  const handleOnKeyDown = (e, ind) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[ind - 1]?.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((item, ind) => {
        return (
          <input
            onKeyDown={(e) => handleOnKeyDown(e, ind)}
            ref={(input) => (refArr.current[ind] = input)}
            style={{ width: 30, textAlign: "center", height: 30, fontSize: 30 }}
            type="text"
            value={item}
            onChange={(e) => handleOnChange(e, ind)}
          />
        );
      })}
    </div>
  );
};

export default OTP;
