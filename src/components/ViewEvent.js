import React from 'react';
import Axios from 'axios';

export default class ViewEvent extends React.Component {
  componentDidMount() {
	Axios.get('http://ticketviral.com/api/v1/tours')
	.then((data) => {
		let d = data.data.data;
	  this.setState({ contacts: data });
	  
	  console.log(typeof data.data['data']);

	  console.log(`slug : ${d.data[0].slug}`);
	  console.log(`description : ${d.data[0].description}`);
	  console.log(`price : ${d.data[0].price}`);
	  console.log(`maxGroupSize : ${d.data[0].maxGroupSize}`);

	  console.log(`guides photo : ${d.data[0].guides[0].photo}`);
	  console.log(`guides role: ${d.data[0].guides[0].role}`);
	  console.log(`guides name: ${d.data[0].guides[0].name}`);
	  console.log(`guides email: ${d.data[0].guides[0].email}`);
	  console.log(`guides phone: ${d.data[0].guides[0].phone}`);

	  const dataV = d.data[0].description;
	})
	.catch(console.log)
  }
  render(){
	  return(
		    <div className='viewEvent'>
				<div className='box'>
					<h1>Fetching data</h1>
					<h1>{}</h1>
				</div>
			</div>
	  )
  }
}


