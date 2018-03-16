import React from 'react';



let Component1 = (props) => {
    const user= {
        firstName: 'Joe',
        lastName: 'Doe'
    }
    
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }


    function handleOnClick() {
        alert(formatName(user))
    }

        return (
            <button onClick={handleOnClick}>
            You are a: {props.name}
            </button>
        );
}
export default Component1;
