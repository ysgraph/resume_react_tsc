import React from 'react';
import './ItemLink.css';
import noteIcon from './img/note.svg';
import twIcon from './img/tw.svg';

function ItemLink(props: any): JSX.Element {

    return (
        <div className="ItemLink">
            <a href="https://twitter.com/ysgraph" className="links" target="_blank" rel="noopener noreferrer"><img src={twIcon} alt="Twitterリンク" /></a>
            <a href="https://note.com/ysgraph" className="links" target="_blank" rel="noopener noreferrer"><img src={noteIcon} alt="noteリンク" /></a>
        </div>
    )
}

export default ItemLink;