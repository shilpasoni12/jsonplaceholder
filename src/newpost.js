import React, { Component } from 'react';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';
/*{add new post}*/
class newPost extends Component {
    constructor(props) {
        super(props);

    }
    

    newPost=()=>{/*{api to add new post}*/
		axios.post("https://jsonplaceholder.typicode.com/posts/" ,{
      		title: this.refs.title.value,
      		body: this.refs.body.value,
      		userId: 3
		})

		

                .then(response => {
                    const newPost = response.data;
                    console.log(newPost);
                    this.setState({ newPost});
                })
        
    }

    render() {

        return (
            <div>
				      <div className="content">
  					   <div className="card">
               <h2 className="heading-newpost">ADD NEW POST....</h2>
  					     <input type="text" ref="title" placeholder="Update Title" className="update-style"></input>
  					<br/>
  					<input type="text" ref="body" placeholder="Update Body" className="update-style"></input>
  					<button onClick={this.newPost} className="update-button">New Post</button>{/*update button*/}
  					
  					</div>	
			   </div>
			   </div>
        )
    }
}
export default newPost;

