import React from 'react';

const BtnStoryGroup = (props) => {
	return (
	<div>
		<button 
			style={{color: props.Color}}
			onClick={() => props.OnClick(props.Type, null)}>
			{props.Type}
		</button>
	</div>
	)
};

export default BtnStoryGroup;