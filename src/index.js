import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import 'antd/dist/antd.min.css'

import './index.css';

import './assets/Avalanche.css'
import './assets/pageSections.css'
import './assets/generals.css'
import './assets/team.css'

import './assets/Backdrop.css'
// import './assets/DrawerToggleButton.css'
import './assets/Navbar.css'
import './assets/responsive.css'
import './assets/SideDrawer.css'
import './assets/Toolbar.css'

// import './assets/components/footer.css'
// import './assets/components/navbar.css'

import './assets/Slide.css'
// import './assets/cards.css'

// import './assets/new-navbar.css';
import './assets/Button.css'

import './assets/ballHive.css'
import './assets/playerSignUp.css'
import './assets/landing-page.css'


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 