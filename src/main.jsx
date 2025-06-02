import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from "react-router-dom"; // BrowserRouter 임포트 제거
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}{/* BrowserRouter 제거 */}
      <App />
    {/* </BrowserRouter> */}{/* BrowserRouter 제거 */}
  </StrictMode>,
)
