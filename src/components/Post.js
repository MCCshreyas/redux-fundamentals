import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
    }


    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
                <div className="center">
                    No details
                </div>
            )

        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);