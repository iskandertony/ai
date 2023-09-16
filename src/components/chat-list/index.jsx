import React, { useState } from 'react';
import "./style.scss";

const ChatList = () => {

    const [activeItem, setActiveItem] = useState(null);

    const menuItems = [
        { name: 'chat', displayName: 'Welcome', gradient: 'linear-gradient(90deg, #006400, #00FF00)' },
        { name: 'search', displayName: 'UI8 Production', gradient: 'linear-gradient(90deg, #32CD32, #228B22)' },
        { name: 'bank', displayName: 'Favorites', gradient: 'linear-gradient(90deg, #7FFF00, #ADFF2F)' },
        { name: 'barcode', displayName: 'Archived', gradient: 'linear-gradient(90deg, #20B2AA, #3CB371)' },
    ];

    // Обработчик клика
    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className={"chat_list"}>
            {menuItems.map((item, index) => (
                <div
                    className={`chat_content ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => handleClick(item.name)}
                    key={index}
                >
                    <div style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '4px',
                        backgroundImage: item.gradient,
                    }}></div>
                    <div className={"title"}>
                        {item.displayName}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
