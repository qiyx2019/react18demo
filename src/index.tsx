import * as ReactDOMClient from 'react-dom/client';
import * as React from "react";
import App from '@/rx-demo/demo1';

const container:HTMLElement = document.getElementById('root');
ReactDOMClient.createRoot(container).render(<App />)