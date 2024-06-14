import React from 'react'
import classNames from 'classnames'
import './Button.scss';

// 1. Button 생성
// 2. Button size(large, medium, small)
// 3. Button color(blue, gray, pink)
// 4. outline 옵션 : 버튼에서 테두리만 보이게 설정
// 5. fullWidth : 버튼이 너비의 전체를 차지함
function Button({children, size, color, outline, fullWidth, ...rest}) {
    // className='Button large'
    // [Button, size].join('') or `Button $[size]`
    // 클래스에 관련된 처리를 쉽게 하는 library classnames
    return <button className={classNames('Button', size, color, {outline, fullWidth})} {...rest}>{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'gray'
};

export default Button;