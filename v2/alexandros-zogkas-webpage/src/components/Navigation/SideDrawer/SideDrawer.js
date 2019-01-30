import React from 'react';

import './SideDrawer.css';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import MenuBtn from '../MenuBtn/MenuBtn';

const sideDrawer = (props) => {
	let attachedClasses = ['SideDrawer', 'Close'].join(' ');
	if (props.backdropShow) {
		attachedClasses = ['SideDrawer', 'Open'].join(' ');
	}
	
	return(
		<Aux>
			<Backdrop 
				show={props.backdropShow}
				OnClick={props.OnClick}/>
			<div className={attachedClasses}>
				<div className='LogoSideDrawer'>
					<MenuBtn 
						OnClick={props.OnClick}/>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;