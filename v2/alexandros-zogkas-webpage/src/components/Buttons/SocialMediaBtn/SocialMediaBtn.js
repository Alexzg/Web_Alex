import React from 'react';

import './SocialMediaBtn.css';

const SocialMediaBtn = (props) => {
	let alt = props.Btn + ' link';
	return(
		<div className='SocialMediaBtn'>
			<a href={props.Link} target='_blank'  rel="noopener noreferrer">
				<img src={props.Img} alt={alt}/>
			</a>
		</div>
	)
};

export default SocialMediaBtn;