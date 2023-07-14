import {useState} from "react";

import Header from "./dashboard/header";
import Nav from "./dashboard/nav";

export const GeneralLayout = ({children})=>{
    const [open, setOpen] = useState(false);

    return (
      <>
        <Header onOpenNav={() => setOpen(true)} />
        <Nav
          openNav={open}
          onCloseNav={() => {
            console.log("it works")
            setOpen(false);
          }}
        />
        {children}
      </>
    );
}
