import { createContext } from "react";

// context의 기본상태 지정
const ColorContext = createContext({color: 'red'});

export default ColorContext; // 외부에서 사용(export)