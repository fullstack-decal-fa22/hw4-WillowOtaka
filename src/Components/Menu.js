import React from 'react';
import Color from "./Color";

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color = "red" handleClick = {props.click}></Color>
          <Color color = "pink" handleClick = {props.click}></Color>
          <Color color = "blue" handleClick = {props.click}></Color>
          <Color color = "green" handleClick = {props.click}></Color>
      </div>
    );
}

export default Menu;