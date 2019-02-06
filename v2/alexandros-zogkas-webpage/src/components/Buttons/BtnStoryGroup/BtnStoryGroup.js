import React from 'react';

import './BtnStoryGroup.css';

const BtnStoryGroup = (props) => {
	let classname = 'GroupBtnLine';
	if (props.ToggleShow) { classname += ' GroupBtnClicked' };
	
	return (
	<div className={classname} style={{borderColor: props.Color}}>
		<button 
			className='GroupBtn'
			style={{backgroundColor: props.Color, borderColor: props.Color}}
			onClick={() => props.OnClick(props.Type, null)}>
			{props.Type}
		</button>
	</div>
	)
};

export default BtnStoryGroup;