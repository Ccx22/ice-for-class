import React from 'react';
import Dom from 'react-dom'
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './utils/reset.css'
import 'antd/dist/antd.css';
Dom.render(
  <BrowserRouter >
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  </BrowserRouter>, document.getElementById("root")
);


