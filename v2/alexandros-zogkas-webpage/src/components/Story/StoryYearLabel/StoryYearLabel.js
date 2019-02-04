import React from 'react';

import './StoryYearLabel.css';

const StoryYearLabel = (props) => (
	<div className='MainBody'>
		<p><strong>{props.StoryYear}</strong></p>
	</div>
);

export default StoryYearLabel;