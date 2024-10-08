// # 将应用挂载到一个 DOM 元素上
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.hydrateRoot(
	document.getElementById("root") as HTMLElement,
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
