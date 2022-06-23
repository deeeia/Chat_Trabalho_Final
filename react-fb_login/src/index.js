import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ChatPage } from './pages';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
			<Routes>
        <Route path='/' element={<App />}/>
        <Route path='/chat/:username' element={<ChatPage />} />
      </Routes>
		</BrowserRouter>
  </div>
);

reportWebVitals();
