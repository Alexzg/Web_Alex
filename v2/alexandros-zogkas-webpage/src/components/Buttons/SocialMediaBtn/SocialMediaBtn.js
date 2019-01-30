import React from 'react';

const SocialMediaBtn = (props) => {
	return(
		<div>
			<p>
				<a href={props.Link} target='_blank'>
					icon: {props.children}
				</a>
			</p>
		</div>
	)
};

export default SocialMediaBtn;