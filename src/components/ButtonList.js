import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
    return ( 
    <div className="flex">
        <Buttons name="ALL"/>
        <Buttons name="Music"/>
        <Buttons name="Live"/>
        <Buttons name="BollyWood"/>
        <Buttons name="free code camp"/>
        <Buttons name="Redux"/>
        <Buttons name="SONGS"/>
        <Buttons name="Sports"/>
        <Buttons name="News"/>
        <Buttons name="Frontend"/>
        <Buttons name="Javasript"/>
    </div>
    );
};
export default ButtonList;