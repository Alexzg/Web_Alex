import React from 'react';

const BtnStoryTitle = (props) => {
	let btnColor = 'black';
	//Control of btn type and color accordingly
	const storyGroup = props.StoryGroups.find(group => group.btnType === props.StoryGroup);
	btnColor = storyGroup.btnColor;
	
	return(
		<button 
			style={{display: 'block', color: btnColor}}
			onClick={() => props.OnClick(null, props.StoryTitle)}>
			{props.StoryTitle}
		</button>
	)
};

export default BtnStoryTitle;