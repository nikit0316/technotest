import React from "react";
import User from "./User/User";
import axios from "axios";

class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userData: null,
            displayThing: 'none'
        };
    }

    async componentDidMount() {
       await axios.get('https://watchlater.cloud.technokratos.com/get/array').then(response => {
           this.setState({
                userData: response.data.map(item => {
                    return(
                            <div id='reminder'>
                                <User name={item.name} fname={item.fname} mname={item.mname} status={item.status} lastUpdatedAt={item.lastUpdatedAt} avatar={item.avatar} balance={item.balance}/>
                            </div>
                    )
                })
           })
       })
    };

    render() {
        return this.state.userData;
    }
}

export default UsersList;