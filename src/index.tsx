import * as ReactDOMClient from 'react-dom/client';
import * as React from "react";
import App from '@/react18-demo/demo2/app';

     
const container:HTMLElement = document.getElementById('root');
ReactDOMClient.createRoot(container).render(<App />)
window.onscroll = function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log("滚动距离" + scrollTop);
    sessionStorage.setItem('scrollTop',String(scrollTop))
}