import React from "react";

// const item = (props) => {
//     return (
//         <div>
//             {props.text}
//         </div>
//     );
// }


function ArrayKey() {

    const array1 = ['a', 'b', 'z', 'c', 'd', 'e'];
    const array2 = [
        {id: 0, text: 'a'},
        {id: 1, text: 'b'},
        {id: 5, text: 'z'},
        {id: 2, text: 'c'},
        {id: 3, text: 'd'}]

    return (
        <div>
            {/* {array1.map(item => (<div>{item}</div>))} */}
            {array2.map(item => <div key={item.id}>{item.text}</div>)}
        </div>
    );
}

export default ArrayKey;

