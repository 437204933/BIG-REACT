import { HostText } from './../../react-reconciler/src/workTags';
import { FiberNode } from './../../react-reconciler/src/fiber';
export type Container = Element;
export type Instance = Element;
export type TextInstance = Text;

export const createInstance = (type: string, props: any): Instance => {
	// TODO: (lvyongjian)：处理props
	const element = document.createElement(type);
	return element;
};

export const appendInitialChild = (
	parent: Instance | Container,
	child: Instance
) => {
	return parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;

export function commitUpdate(fiber: FiberNode) {
	switch (fiber.tag) {
		case HostText:
			const text = fiber.memoizedProps.content;
			return commitTextUpdate(fiber.stateNode, text);

		default:
			if (__DEV__) {
				console.warn('还未实现的update类型', fiber);
			}
			break;
	}
}

export function commitTextUpdate(textInstance: TextInstance, content: string) {
	textInstance.textContent = content;
}

export function removeChild(
	child: Instance | TextInstance,
	container: Container
) {
	container.removeChild(child);
}
