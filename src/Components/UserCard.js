import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({user}) => {

    return(
        <Card style={{backgroundColor:"#121212", color:"#EAF0F1"}} classname= "text-center mt-3 mb-3">
            <img src={user.avatar_url} className="img-thumbnail"/>
            <CardBody>
                <div style={{color:"#EAF0F1"}}>{user.login}</div>
                <div style={{color:"#EAF0F1"}}>{user.name}</div>
                <div style={{color:"#EAF0F1"}}>{user.location}</div>
                <div style={{color:"#EAF0F1"}}>{user.bio}</div>
                <div className="text-info">Availble for Hire : {user.hireable ? 'Yes' : 'No'}</div>
            </CardBody>
        </Card>
    )
};

export default UserCard;
