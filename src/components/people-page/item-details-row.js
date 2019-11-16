import React from 'react';

const ItemDetailsRow = ({item, field, label}) => {
    return <li>{label}: <span>{item[field]}</span></li>;
}

export default ItemDetailsRow;