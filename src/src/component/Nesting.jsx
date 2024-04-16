import React from 'react'
//MadhuLavanya - this is PascleCase
//madhuLavanya - this is camelCase
//madhu_lavanya - this is snake_case
const Nesting = () => {
    //this is called jsx expression nesting
    const user = false;
    if(user = true){
        return <p>yes the user is logged In</p>
    }
    else{
        return <p>The user is logged out</p>
    }
}
export default Nesting