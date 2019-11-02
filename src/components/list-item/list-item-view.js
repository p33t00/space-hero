import React from 'react';

export default class ListItemView extends React.Component {
    formatData = (items, onItemChange) => {
        if(!items) return null;
        return items.map(c => {return <tr key={c.id} onClick={() => onItemChange(c.id)}><td>{c.name}</td></tr>});
    }

    render() {
        const {itemData, onItemChange} = this.props;
        return (
            <table className="table table-hover table-sm">
                <tbody>
                    {this.formatData(itemData, onItemChange)}
                </tbody>
            </table>
        );
    }
}