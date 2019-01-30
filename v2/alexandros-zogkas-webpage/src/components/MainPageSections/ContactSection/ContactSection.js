import React, { Component } from 'react';

import SocialMediaData from '../../../assets/ContactData/SocialMediaData/SocialMediaData';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

import SocialMediaBtn from '../../Buttons/SocialMediaBtn/SocialMediaBtn';


class ContactSection extends Component {
	render(){
		const SocialMediaButtons = SocialMediaData.socialButtons.map(socialBtn => (
					<SocialMediaBtn 
						key={socialBtn.btnType}
						Link={socialBtn.link}>
						{socialBtn.btnType}
					</SocialMediaBtn>));
		
		return(
			<div id={this.props.id} >
				<h3>Contact Section</h3>
				<p>contact info</p>
				{SocialMediaButtons}
			</div>)
	}
}

export default ContactSection;