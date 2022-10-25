import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    const[blocks, updateBlocks] = useState([]);
    const createBlock = (color) => {
        updateBlocks([<Block color = {color}></Block>, ...blocks])
    }
    const block = blocks.map((col) => <Block color = {col}></Block>);
    return (
        <div>
            <Menu onClick = {createBlock}></Menu>
            {block}
        </div>
    );
}

export default Feed;