import React from 'react';
import axios from 'axios';
import './styles.css';

class App extends React.Component {

	state = {
		details: [],
	}

	componentDidMount() {

		let data;

		axios.get('http://localhost:8000/wel/')
			.then(res => {
				data = res.data;
				this.setState({
					details: data
				});
			})
			.catch(err => { })
	}

	render() {
		return (
			<div className='user-container'>
				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div >
							<div>
								<footer>
									<cite title="Source Title">
										{'Username: ' + detail.user}</cite>
								</footer>
								
								<h5>{'Password: ' + detail.password} </h5>
								<br />
							</div>
						</div>
					</div>
				)
				)}
			</div>
		);
	}
}

export default App;