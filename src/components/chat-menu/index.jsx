import React, { useState } from 'react';
import "./style.scss";
import Icon from "../icon";

const ChatMenu = () => {
    // Храним активный элемент меню
    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { name: 'chat', displayName: 'Chats' },
        { name: 'search', displayName: 'Search' },
        { name: 'bank', displayName: 'Manage subscription' },
        { name: 'barcode', displayName: 'Updates & FAQ' },
        { name: 'settings', displayName: 'Settings' },
    ];

    // Обработчик клика
    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={"chat_menu"}>
            {menuItems.map((item, index) => (
                <div
                    className={`chat_content ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => handleClick(item.name)}
                    key={index}
                >
                    <Icon name={item.name} />
                    <div className={"title"}>
                        {item.displayName}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatMenu;
