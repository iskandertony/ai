import React from 'react';
import Icon from "../icon";

const Logo = (props) => {
    const {onClick} = props
    return (

            <div className={"flex gap-10"} onClick={onClick}>
                <Icon name={"logo"} />
                <h2>Brainwave</h2>
            </div>

    );
};

export default Logo;