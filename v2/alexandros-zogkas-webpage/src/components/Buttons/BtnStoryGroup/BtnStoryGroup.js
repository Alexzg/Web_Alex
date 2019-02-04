import React from 'react';

import './BtnStoryGroup.css';

const BtnStoryGroup = (props) => {
	return (
	<div className='Line' style={{borderColor: props.Color}}>
		<button 
			className='Btn'
			style={{backgroundColor: props.Color, borderColor: props.Color}}
			onClick={() => props.OnClick(props.Type, null)}>
			{props.Type}
		</button>
	</div>
	)
};

export default BtnStoryGroup;