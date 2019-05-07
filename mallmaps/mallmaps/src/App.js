import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { malls } from  './dummyData';
import './App.css';


class App extends Component{
	constructor(){
		super();
		this.state = {
			malls: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		this.setState({ malls: malls})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

	}

	render(){
		const filteredMalls = this.state.malls.filter(malls => {
			return malls.keywords.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		//console.log(filteredRobots);


		return (
		<div className='tc'>
			<h1 className='f1'>Mall maps</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList malls={filteredMalls}/>
		</div>
		);
	}

}

export default App;
