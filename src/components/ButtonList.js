import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
    return ( 
    <div className="flex">
        <Buttons name="ALL"/>
        <Buttons name="LIVE"/>
        <Buttons name="SPORTS"/>
        <Buttons name="free code camp"/>
        <Buttons name="JETHALAL"/>
        <Buttons name="SONGS"/>
        <Buttons name="Striver"/>
        <Buttons name="Ishan sharma"/>
    </div>
    );
};
export default ButtonList;