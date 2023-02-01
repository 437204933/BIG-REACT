import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ReactElement } from 'shared/ReactTypes';

console.log(import.meta);
(import.meta as any).hot.on('vite:beforeUpdate', () => {
	const root = document.getElementById('root');
	if (root) {
		root.innerHTML = '';
	}
});

function App() {
	const [num, setNum] = useState(1);
	return <div>{num}</div>;
}

function Child() {
	return <span>big-react</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	(<App />) as ReactElement
);
