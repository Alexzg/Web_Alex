import React, { Component } from 'react';

import SocialMediaData from '../../../assets/ContactData/SocialMediaData/SocialMediaData';

import './ContactSection.css';

import SocialMediaBtn from '../../Buttons/SocialMediaBtn/SocialMediaBtn';

import LinkedinIcon from '../../../assets/Images/ContactSection/Socialicons/linkedin.svg';
import XingIcon from '../../../assets/Images/ContactSection/Socialicons/xing.svg';
import GithubIcon from '../../../assets/Images/ContactSection/Socialicons/github.svg';

class ContactSection extends Component {
	render(){
		SocialMediaData.socialButtons.map(socialBtn => {
			let socialButton;
			if (socialBtn.btnType === 'Xing') {
				socialButton = XingIcon;
			} else if (socialBtn.btnType === 'LinkedIn'){
				socialButton = LinkedinIcon;
			} else {
				socialButton = GithubIcon;
			}
			socialBtn.icon = socialButton;
		})
		
		const SocialMediaButtons = SocialMediaData.socialButtons.map(socialBtn => (
			<SocialMediaBtn 
				key={socialBtn.btnType}
				Btn={socialBtn.btnType}
				Link={socialBtn.link}
				Img={socialBtn.icon}>
				{socialBtn.btnType}
			</SocialMediaBtn>));
		
		return(
			<div id={this.props.id} className='ContactSectionBody'>
				<h3>If you want to know more...</h3>
				<div className='SocialMediaButtonsGroup'>{SocialMediaButtons}</div>
				<h4>...or if you want help with a project</h4>
			</div>)
	}
}

export default ContactSection;