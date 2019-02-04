import React, { Component } from 'react';

import StoryData from '../../../assets/StorylineData/StorylineData.json';
import StoryGroupType from '../../../assets/StorylineData/StorylineGroups/StorylineGroups.json';
import './StorylineSection.css';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

import BtnStoryGroup from '../../Buttons/BtnStoryGroup/BtnStoryGroup';
import StoryYearLabel from '../../Story/StoryYearLabel/StoryYearLabel';
import BtnStoryTitle from '../../Story/BtnStoryTitle/BtnStoryTitle';
import StoryContent from '../../Story/StoryContent/StoryContent';

class StorylineSection extends Component {
	state = {
		storyGroups: StoryGroupType.groups,
		storyData: StoryData.storyline
	}
		
	handleContentVisibilityToggle = (Type, storyTitle) => {
		// Type = undefined -> When Story "Title" is clicked
		// storyTitle = undefined -> When a Story "Group" btn is clicked
		// 1. If a Story "Group" btn is clicked
		if (Type){
			const storyGroups = [...this.state.storyGroups];
			// Change the property "btnToggleShow" of the clicked button
			storyGroups.map(storyGroup => {
				if (storyGroup.btnType === Type){
					storyGroup.btnToggleShow = !storyGroup.btnToggleShow;
					return storyGroup;}
				return storyGroup});
			// If storyGroup btn 'All' is clicked, change every storyGroup btn property "btnToggleShow" to match that of 'All'.
			if (Type === 'All'){
				let btnToggleShowAll = storyGroups.find(storyGroup => storyGroup.btnType === Type).btnToggleShow;
				storyGroups.map(storyGroup => {
					storyGroup.btnToggleShow = btnToggleShowAll;
					return storyGroup});} 
			this.setState ({storyGroups: storyGroups});}; 
		// 2. If a Story "Title" is clicked
		if (storyTitle){
			let stories = [...this.state.storyData];
			stories.map(timeChapter => {
				timeChapter.story.map(story => {
					// Find the clicked story
					if (story.title === storyTitle){
						story.showContent =! story.showContent;
						return story};
					return story});
				return timeChapter});
			this.setState({storyData: stories});}
	}
	
	render() {
		const btnStoryGroup = this.state.storyGroups.map(storyGroup => 
			<BtnStoryGroup 
				key={storyGroup.btnType}
				Type={storyGroup.btnType}
				Color={storyGroup.btnColor}
				ToggleShow={storyGroup.btnToggleShow}
				OnClick={this.handleContentVisibilityToggle} />);
				
		const storyLineTree = this.state.storyData
			.map(timeChapter => (
				<Aux key={timeChapter.year}>
					<StoryYearLabel StoryYear={timeChapter.year} />
					{timeChapter.story.map(story  => (
						<div key={story.title}>
							<BtnStoryTitle 
								StoryTitle={story.title} 
								StoryGroups={this.state.storyGroups}
								StoryGroup={story.group}
								OnClick={this.handleContentVisibilityToggle}/>
							<StoryContent 
								StoryContent={story.content} 
								StoryGroups={this.state.storyGroups}
								StoryGroup={story.group}
								ShowContent={story.showContent}/>
						</div>)
						)}
				</Aux>
		));
		
		return (
			<div id={this.props.id} >
				<h3>If you want to learn more just click it...</h3>
				<div className='GroupBtnBody'>
					<div className='Left Column'></div>
					<div className='Right Column'>{btnStoryGroup}</div>
				</div>
				<div className='StoriesBody'>
					{storyLineTree}
				</div>
			</div>
		)
	}
}
export default StorylineSection;