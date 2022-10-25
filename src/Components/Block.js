import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    const colors = props.color;
    return (
        <div data-testid='main-component'>
            <div className="post" style={{backgroundColor: colors}}></div>
            <div className="caption">{colors}</div>
        </div>
    );
}

export default Block;