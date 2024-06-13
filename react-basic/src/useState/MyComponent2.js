import React from "react";

// Class형 component를 이용한 state 사용
class MyComponent2 extends React.Component {
    // 생성자에서 props 받기
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: props.age
        }
    }

    // 클래스형 component에서는 render() 안에 return을 작성
    render() {
        // props 받기
        let myName = '이순신';
        let {name, age} = this.props;

        return (
            <div>
               {myName}의 클래스형 component<br />
               property1: {name} <br /> 
               property2: {age} <br />
               state의 사용 1: {this.state.a} <br />
               state의 사용 2: {this.state.b} <br />
            </div>
        );
    }    
}

export default MyComponent2