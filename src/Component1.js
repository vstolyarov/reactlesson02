import React from 'react';



let Component1 = (props) => {
    const user= {
        firstName: 'Joe',
        lastName: 'Doe'
    }
    
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

        return (
            <div>
            <button onClick={props.newpet}>
           New PET: 
            </button>
            {props.name}
            </div>
        );
}
export default Component1;
