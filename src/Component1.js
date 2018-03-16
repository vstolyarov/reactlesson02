import React from 'react';


let Component1 = (props) => {
    
    function handleOnClick() {
        console.log('childrens ' + props.name)
    }

        return (
            <button className="button1" onClick={handleOnClick}>
            Click me to see alert, You are a: {props.name}
            </button>
        );
}
export default Component1;
