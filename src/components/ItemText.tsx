import React from 'react';
import './ItemText.css';

function ItemText(props: any): JSX.Element {

    return (
        <div className="ItemText">
            <p>{props.myname}</p>
            <p>{props.role}</p>
            <p>{props.period}</p>
            <p>{props.belonging}</p>
            <p>{props.summary}</p>
            <>
                {props.detail1 && props.detail4 && (
                    <ul>
                        <li>{props.detail1}</li>
                        <li>{props.detail2}</li>
                        <li>{props.detail3}</li>
                        <li>{props.detail4}</li>
                        <li>{props.detail5}</li>
                        <li>{props.detail6}</li>
                    </ul>
                )}
                {props.detail1 && !props.detail4 && (
                    <ul>
                        <li>{props.detail1}</li>
                        <li>{props.detail2}</li>
                        <li>{props.detail3}</li>
                    </ul>
                )}
                {!props.detail1 && (
                    <p></p>
                )}
            </>
        </div>
    )
}

export default ItemText;