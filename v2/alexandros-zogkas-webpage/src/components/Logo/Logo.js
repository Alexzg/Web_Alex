import React from 'react';

import logoImg from '../../assets/Images/WelcomeSection/ProfileCartoon.png';
import './Logo.css';

const logo = (props) => (
	<div className='Logo'>
		<img src={logoImg} alt='Logo is a burger'/>
	</div>
);

export default logo;