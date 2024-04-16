import React from 'react'
const Note = () => {
    const isAvl = true;
    const isDefined = "Yes";
    const isNotDefined = "No";
    return (
        <div>
            {/*<p>This is note 1</p> */}
            <p>{(isAvl)?isDefined:isNotDefined}</p>
        </div>
    )
}
export default Note