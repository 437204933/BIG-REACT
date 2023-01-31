import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactElement } from 'shared/ReactTypes';

function App() {
	return (
		<div>
			<Child />
		</div>
	);
}

function Child() {
	return <span>big-react</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	(<App />) as ReactElement
);
