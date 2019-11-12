import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {
    formatData = (items, onItemChange) => {
        if(!items) return null;
        return items.map(c => {return <tr key={c.id} onClick={() => onItemChange(c.id)}><td>{c.name}</td></tr>});
    }

    render() {
        const {itemData, onItemChange} = this.props;
        return (
            <div className="sh-list-item shadow-sm p-1 bg-black rounded">
                <table className="table table-hover table-sm">
                    <tbody>
                        {this.formatData(itemData, onItemChange)}
                    </tbody>
                </table>
            </div>
        );
    }
}