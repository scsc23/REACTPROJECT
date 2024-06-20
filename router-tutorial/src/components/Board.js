import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Board() {

    const myStyle = {
        background: 'black',
        color: 'white'
    };

    return (
        <div>
            <h3>글 목록</h3>
            <ul>
                {/* <li><Link to='/board/1'>글1</Link></li>
                <li><Link to='/board/2'>글2</Link></li>
                <li><Link to='/board/3'>글3</Link></li> */}
            </ul>
            <li>
                <NavLink to='/board/1' style={({isActive}) => {return isActive ? myStyle : undefined}}>글1</NavLink>
            </li>
            <li>
                <NavLink to='/board/2' style={({isActive}) => {return isActive ? myStyle : undefined}}>글2</NavLink>
            </li>
            <li>
                <NavLink to='/board/3' style={({isActive}) => {return isActive ? myStyle : undefined}}>글3</NavLink>
            </li>

            {/* <Outlet>을 사용하여 하위 component 출력*/}
            <Outlet />
        </div>
    )
}

export default Board;