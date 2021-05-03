import React from "react";
import User from "./User/User";
import axios from "axios";
import {useEffect, useState} from "react";

function UsersList() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function getData() {
            await axios.get('https://watchlater.cloud.technokratos.com/get/array').then(response => {
                setUserData(response.data.map(item => {
                        return (
                            <div id='reminder'>
                                <User name={item.name} fname={item.fname} mname={item.mname} status={item.status}
                                      lastUpdatedAt={item.lastUpdatedAt} avatar={item.avatar} balance={item.balance}/>
                            </div>
                        )
                    })
                )
            })
        }

        getData();
    }, []);
    return userData;
}

export default UsersList;
