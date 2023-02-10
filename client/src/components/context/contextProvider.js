import React, { createContext, useState } from "react";
export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");

const contextProvider = () => {
  const [udata, setUdata] = useState("");
  const [updata, setUpdata] = useState("");
  const [dltdata, setDLTdata] = useState("");

  return (
    <adddata.provider value={{ udata, setUdata }}>
      <updatedara.provider value={{ updata, setUpdata }}>
        <deldata.provider value={{ dltdata, setDLTdata }}>
          {{ children }}
        </deldata.provider>
      </updatedara.provider>
    </adddata.provider>
  );
};

export default contextProvider;
