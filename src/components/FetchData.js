import React,{ useState, useEffect} from 'react';
import Axios from 'axios';

export default FetchData => {
    const [posts, setPosts] = useState([]);
    const [btnData, btnDataSet] = useState('Get Data');
    const btnValueChange = ()=>{
        btnDataSet('Loading...');
    }
  useEffect(()=> {
	Axios.get('http://ticketviral.com/api/v1/tours')
	.then((res) => {
        let d = res.data.data;
        setPosts(res.data);
        console.log(`setPosts Data : ${setPosts(d)}`);
        //   this.setState({ contacts: data });
        console.log(`Response Data : ${res}`);
        console.log(`d : ${d}`);
      
        const dataV = d.data[0].description;
        console.log(`slug : ${d.data[0].slug}`);
        console.log(`dataV : ${dataV}`);
        console.log(`posts : ${posts}`);
        console.log(`setPosts : ${setPosts(d)}`);


	})
	.catch(err=>{

        console.log(err);
    });
},[]);

// console.log(typeof data.data['data']);

// console.log(`slug : ${d.data[0].slug}`);
// console.log(`description : ${d.data[0].description}`);
// console.log(`price : ${d.data[0].price}`);
// console.log(`maxGroupSize : ${d.data[0].maxGroupSize}`);

// console.log(`guides photo : ${d.data[0].guides[0].photo}`);
// console.log(`guides role: ${d.data[0].guides[0].role}`);
// console.log(`guides name: ${d.data[0].guides[0].name}`);
// console.log(`guides email: ${d.data[0].guides[0].email}`);
// console.log(`guides phone: ${d.data[0].guides[0].phone}`);
	  return(
		    <div className='viewEvent'>
				<div className='box'>
					<h1>Fetching API data</h1>
					<ul>
                        
                    </ul>
                    <button className='btn btn--blue' onClick={()=>btnValueChange()}> {btnData} </button>
				</div>
			</div>
	  )
}


// export default FetchData;