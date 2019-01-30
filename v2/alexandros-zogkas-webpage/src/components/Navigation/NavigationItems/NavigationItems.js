import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
	<ul className='NavigationItems'>
		<NavigationItem 
			link='#welcome'>
				Welcome
		</NavigationItem>
		<NavigationItem 
			link='#storyline'>
				Storyline
		</NavigationItem>
		<NavigationItem 
			link='#contact'>
				Contact
		</NavigationItem>
	</ul>
);

export default navigationItems;