import { ReactElement } from 'shared/ReactTypes';
// ReactDOM.createRoot(root).render(<App />)

import { Container } from 'hostConfig';
import {
	createContainer,
	updateContainer
} from 'react-reconciler/src/fiberReconciler';

export function createRoot(container: Container) {
	const root = createContainer(container);

	return {
		render(element: ReactElement) {
			updateContainer(element, root);
		}
	};
}
