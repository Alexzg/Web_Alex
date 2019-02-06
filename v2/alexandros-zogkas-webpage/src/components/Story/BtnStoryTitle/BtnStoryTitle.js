import React from 'react';

import './BtnStoryTitle.css';

const BtnStoryTitle = (props) => {
	let btnColor = 'black';
	//Control of btn type and color accordingly
	const storyGroup = props.StoryGroups.find(group => group.btnType === props.StoryGroup);
	btnColor = storyGroup.btnColor;
	
	// StoryGroups <- StorylineGroups.json
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
	
	let classname = 'BtnStoryTitle';
	if (show){ classname+=' TitleClicked' };
	
	return(
		<button 
			className={classname}
			style={{borderColor: btnColor}}
			onClick={() => props.OnClick(null, props.StoryTitle)}>
			{props.StoryTitle}
		</button>
	)
};

export default BtnStoryTitle;