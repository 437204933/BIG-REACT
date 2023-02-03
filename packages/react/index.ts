import currentDispatcher, {
	Dispatcher,
	resolveDispatcher
} from './src/currentDispatcher';
// React

import { jsx, isValidElement as isValidElementFn, jsxDEV } from './src/jsx';

export const useState: Dispatcher['useState'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useState(initialState);
};

// 内部共享数据
export const BE_FIRED_OBJECT = {
	currentDispatcher
};

export const version = '0.0.0';
// TODO: (lvyongjian)：区分JSX和JsxDEV
export const createElement = jsx;
export const isValidElement = isValidElementFn;
