import React from 'react';
import Axios from 'axios';

export default class ViewEvent extends React.Component {
  componentDidMount() {
	Axios.get('http://3.128.29.166:3000/api/v1/tours')
	.then((data) => {
		let d = data.data.data;
	  this.setState({ contacts: data });
	  console.log(typeof data.data['data']);
	  console.log(d.data[0].description);
	})
	.catch(console.log)
  }
  render(){
	  return(
		    <div className='viewEvent'>
				<div className='box'>
					<h1>Fetching data</h1>
				</div>
			</div>
	  )
  }
}


