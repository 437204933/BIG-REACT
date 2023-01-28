// 是否支持Symbol
const supportSymbols = typeof Symbol === 'function' && Symbol.for;

export const REACT_ELEMENT_SYMBOL = supportSymbols
	? Symbol.for('react.element')
	: 0xeac7;
