import React from 'react';

import './StoryContent.css';

const StoryContent = (props) => {
	// StoryGroups <- StorylineGroups.json
	const storyGroup = props.StoryGroups.find(group => group.btnType === props.StoryGroup);
	let groupShow = storyGroup.btnToggleShow;
	if (storyGroup.btnType === 'All'){
		if (storyGroup.btnToggleShow === true){
			groupShow = true;
		}
	};
	
	// If group btn is clicked, the content must be visible
	// Else 'storyContent' visibility works as before
	let show;
	groupShow ? show=groupShow : show=props.ShowContent;
	
	return(
		<div className='StoryContentBody'>
			<p hidden={!show}>
				{props.StoryContent}
			</p>
		</div>
	)
};

export default StoryContent;