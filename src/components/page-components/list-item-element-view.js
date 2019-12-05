import React from 'react';

const ListItemElementView = ({items, onItemChange}) => {
    return items.map(c => <tr key={c.id} onClick={() => onItemChange(c.id)}><td>{c.name}</td></tr>);
}

export default ListItemElementView;