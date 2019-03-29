import React, { Component } from 'react';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';
/*{update post}*/
class Update extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

          /*api to fetch posts*/
            axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id)

                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                    this.refs.title.value=this.state.posts.title;
                    this.refs.body.value=this.state.posts.body;
                })
        }

    updatePost=()=>{/*{api to update post}*/
		axios.put("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id,{
			id: 1,
      		title: this.refs.title.value,
      		body: this.refs.body.value,
      		userId: 3
		})

		

                .then(response => {
                    const update = response.data;
                    console.log(update);
                    this.setState({ update});
                })
        
    }

    render() {

        return (
            <div>
				      <div className="content">
  					   <div className="card">
  					     <input type="text" ref="title" placeholder="Update Title" className="update-style"></input>
  					<br/>
  					<input type="text" ref="body" placeholder="Update Body" className="update-style"></input>
  					<button onClick={this.updatePost} className="update-button">Update</button>
  					
  					</div>	
			   </div>
			   </div>
        )
    }
}
export default Update;

