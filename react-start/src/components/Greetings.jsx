import React from "react";

export default function Greetings() {
    return React.createElement('section', null, (
        React.createElement('div', { className: 'items' }, [
            React.createElement('h1', { className: 'title_item', key: 1 },  'Hello Vitala'),
            React.createElement('p', { className: 'text_item', key: 2 },  'Вітаю з першим проєктом на React')
        ]))    
    );
}