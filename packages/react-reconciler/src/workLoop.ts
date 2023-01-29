import { HostRoot } from './workTags';
import { beginWork } from './beginWok';
import { completeWork } from './completeWork';
import { createWorkInProgress, FiberNode, FiberRootNode } from './fiber';
let workInProgress: FiberNode | null = null;

function prepareFreshStack(fiber: FiberRootNode) {
	workInProgress = createWorkInProgress(fiber.current, {});
}

export function scheduleUpdateOnFiber(fiber: FiberNode) {
	// 调度功能
	const root = markUpdateFromFiberToRoot(fiber);
	renderRoot(root);
}

function markUpdateFromFiberToRoot(fiber: FiberNode) {
	let node = fiber;
	let parent = node.return;
	while (parent !== null) {
		node = parent;
		parent = node.return;
	}
	if (node.tag === HostRoot) {
		return node.stateNode;
	}
	return null;
}

function renderRoot(root: FiberRootNode) {
	// 初始化
	prepareFreshStack(root);

	do {
		try {
			workLoop();
			break;
		} catch (e) {
			if (__DEV__) {
				console.warn('workLoop发生错误', e);
			}
			workInProgress = null;
		}
	} while (true);

	const finishedWork = root.current.alternate;
	root.finishedWork = finishedWork;

	// wip fiberNode树 树中的flags
	commitRoot(root);
}

function workLoop() {
	while (workInProgress != null) {
		performUnitOfWork(workInProgress);
	}
}

function performUnitOfWork(fiber: FiberNode) {
	const next = beginWork(fiber);
	fiber.memoizedProps = fiber.pendingProps;

	if (next === null) {
		completeUnitWork(fiber);
	} else {
		workInProgress = next;
	}
}

function completeUnitWork(fiber: FiberNode) {
	let node: FiberNode | null = fiber;
	do {
		completeWork(fiber);
		const sibling = node.sibling;

		if (sibling !== null) {
			workInProgress = sibling;
			return;
		} else {
			node = node.return;
		}
	} while (node !== null);
}
