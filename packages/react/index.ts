import currentDispatcher, {
	Dispatcher,
	resolveDispatcher
} from './src/currentDispatcher';
// React

import { jsxDEV } from './src/jsx';

export const useState: Dispatcher['useState'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useState(initialState);
};

// 内部共享数据
export const BE_FIRED_OBJECT = {
	currentDispatcher
};

export default {
	version: '0.0.0',
	createElement: jsxDEV
};
