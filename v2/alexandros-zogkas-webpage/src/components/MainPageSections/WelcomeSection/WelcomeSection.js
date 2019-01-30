import React from 'react';

import './WelcomeSection.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import image from '../../../assets/Images/WelcomeSection/Profile.jpg';

const WelcomeSection = (props) => (
	<div id={props.id} className='MainSection'>
		<img src={image} />
		<p>Hi, I am Alexandros and this is my Story so far...</p>
	</div>
);

export default WelcomeSection;