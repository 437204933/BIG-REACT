import { REACT_ELEMENT_SYMBOL } from 'shared/ReactSymbols';
import {
	Type,
	Key,
	Props,
	Ref,
	ReactElementType,
	ElementType
} from 'shared/ReactTypes';

// React Element

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_SYMBOL,
		type,
		key,
		ref,
		props,
		__mark: 'LvYongJian'
	};
	return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		// key 赋值
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		// ref 赋值
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		// 自身的prop赋值
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}

		// 判断children长度
		const maybeChildrenLength = maybeChildren.length;

		if (maybeChildrenLength) {
			// [children] 一个或者多个
			if (maybeChildrenLength === 1) {
				props.children = maybeChildren[0];
			} else {
				props.children = maybeChildren;
			}
		}

		return ReactElement(type, key, ref, props);
	}
};

// 暂时一致
export const jsxDEV = (type: ElementType, config: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;

	for (const prop in config) {
		const val = config[prop];
		// key 赋值
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		// ref 赋值
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		// 自身的prop赋值
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
		return ReactElement(type, key, ref, props);
	}
};
