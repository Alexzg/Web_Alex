import React from 'react';

import logoImg from '../../assets/Images/WelcomeSection/ProfileCartoon.png';
import './Logo.css';

const logo = (props) => (
	<div className='Logo'>
		<img src={logoImg} alt='My image as a cartoon'/>
	</div>
);

export default logo;