import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './toggle';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Comment from './comments.js';
import newPost from './newpost';

/*{Main page}*/
class Home extends Component {
        constructor(props) {
            super(props);
            this.state = {
                posts: [],
                isToggleOn: "My Post",
                postid: ""
            };
        }
    
        componentDidMount() {
            /*{api to view post}*/
            axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")
                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                })
        }
        /*{switch to my post and all post}*/
          toggle = () => {
            this.state.isToggleOn == "My Post" ? this.setState({ isToggleOn: "All Post" }) : this.setState({ isToggleOn: "My Post" });
            if (this.state.isToggleOn == "My Post") {
                axios.get("https://jsonplaceholder.typicode.com/posts")
                    .then(response => {
                        const posts = response.data;
                        console.log(posts);
                        this.setState({ posts });
                    })
            } else {
                axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")
                    .then(response => {
                        const posts = response.data;
                        console.log(posts);
                    this.setState({ posts });
                })
        }

    }
        /*{arrow function for delete }*/
         deletePost = (id) => {
            this.setState({ posts: this.state.posts.splice(id, 99) });
            console.log("Posts" + this.state.posts);
        }
        /*{arrow funtion for comments}*/
        comment = (id) => {
            this.setState({ postid: id });
        }
        render() {
    return (
        <div>
                    <div className="topnav">                 
                        <Toggle toggle={this.toggle}/>
                            {/*link to add new post*/}
                            <Link to={"/newpost/"}>
                                <button >New Post</button>
                            </Link>               
                    </div>
                <div>
                    {this.state.posts.map(post=>
                <div>
                    {/*link to view comments*/}
                        <Link to={'/Comment/'+post.id}>
                            <div key={post.id} onClick={()=>this.comment(post.id)}>
                                <Jobcard title={post.title} body={post.body} />
                            </div>
                        </Link>
                <div>
                 <button className="button" onClick={()=>this.deletePost(post.id)}>Delete</button>             
                   <Link to={"Update/"+post.id}>{/*link to update post*/}
                      <button className="button">Update</button>
                   }
                        </Link>
                </div>

                </div>
            )
        }
            </div>
         </div>
    );
}
}
export default Home;

   class Jobcard extends Component {
     constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <div className="content">
                    <div className="jobcard">
                    <h1>{this.props.title}</h1>
                    <article>{this.props.body}</article>
                    </div>  
            </div>
            </div>
        )
    }
}