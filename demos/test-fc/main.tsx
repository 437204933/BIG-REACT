import React, { useState } from 'react';
import { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';

console.log(import.meta);
(import.meta as any).hot.accept((mode) => mode.render());
function App() {
	const [num, setNum] = useState(100);
	window.setNum = setNum;
	return num === 3 ? <Child onClick={() => setNum(111)} /> : <div>{num}</div>;
}

function Child() {
	return <span>big-react</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	(<App />) as ReactElement
);
