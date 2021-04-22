import React from "react";
import UsersList from "./components/Users/UsersList.jsx";
import styles from "./App.module.css"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.appWrapper}>
                <UsersList/>
            </div>
        )
    }
}

export default App;