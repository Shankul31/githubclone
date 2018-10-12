import React, {Component} from 'react';

export default class User extends Component{
    render(){
        const { user } = this.props;

        return(
            <div>
                <img src={user.image}/>
                <h4>{user.name}</h4>
                <h4>{user.location}</h4>
                <h4>{user.follower}</h4>
                

            </div>
        )
    }
}