import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Player extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        name = props.name,
        phone = props.phone,
        props = props.session
    };
}

    editName(newName){
        this.state.name = newName;
    }

    editPhone(newPhone){
        this.state.phone = newPhone;
    }

    render(){
        return (
            <div className="player">
            <span>{name}</span>
            <span>{phone}</span>
            <span>{session}</span>
            </div>
        )
    }
}

