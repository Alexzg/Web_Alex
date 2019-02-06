import React from 'react';

import './StoryYearLabel.css';

const StoryYearLabel = (props) => (
	<div className='YearLabelMainBody'>
		<p><strong>{props.StoryYear}</strong></p>
	</div>
);

export default StoryYearLabel;