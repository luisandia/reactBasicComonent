import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/';
import StaticSite from './components/Router'
import registerServiceWorker from './registerServiceWorker';
import AuthSite from "./components/Auth"

/*
ReactDOM.render(<StaticSite />,
	document.getElementById('root')
);*/
ReactDOM.render(<AuthSite />,
	document.getElementById('root')
);


registerServiceWorker();
