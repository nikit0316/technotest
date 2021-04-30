import React from "react";
import UsersList from "./components/Users/UsersList.jsx";
import styles from "./App.module.css"

function App() {

    return (
        <div className={styles.appWrapper}>
            <UsersList/>
        </div>
    )
}

export default App;
