import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage/MainPage';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<MainPage />
				</Layout>
			</div>
		);
	}
}

export default App;
