import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import WelcomeSection from '../../components/MainPageSections/WelcomeSection/WelcomeSection';
import StorylineSection from '../../components/MainPageSections/StorylineSection/StorylineSection';
import ContactSection from '../../components/MainPageSections/ContactSection/ContactSection';


class MainPage extends Component {
	state = {
	}
	
	render() {
		return(
			<div style={{margin: "0 20px 0 20px"}}>
				<WelcomeSection id='welcome' />
				<StorylineSection id='storyline' />
				<ContactSection id='contact' />
			</div>
		);
	}
}

export default MainPage;