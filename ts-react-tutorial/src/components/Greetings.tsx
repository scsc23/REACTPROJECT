import React from "react";

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;    // return 없음
};

// const Greetings: React.FC<GreetingsProps> = ({name}) => (
//     <div>Hello, {name}</div>
// ); 

const Greetings2 = ({name, mark, optional, onClick}: GreetingsProps) => {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name}{mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>클릭</button>
            </div>
        </div>
    );
}

function Greetings3({name, mark}: GreetingsProps) {
    return (
        <div>Hello, {name}</div>
    );
}

Greetings2.defaultProps = {
    mark: 'dddd'
};

export default Greetings2;