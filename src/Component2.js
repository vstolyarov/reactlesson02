import React from 'react';

let Component2 = (props) => {
    function activateSmart2() {
        alert(props.age)
    }
        return (
            <button onClick={activateSmart2}>
                <h1>Click to increase Life, age:{props.age}</h1>
            </button>
        );
}
export default Component2;