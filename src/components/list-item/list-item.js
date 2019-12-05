import React from 'react';
import './list-item.css';

export default ElementView => {
    return class extends React.Component {
        render() {
            const {itemData, onItemChange} = this.props;
            return (
                <div className="sh-list-item shadow-sm p-1 bg-black rounded">
                    <table className="table table-hover table-sm">
                        <tbody>
                            <ElementView items={itemData} onItemChange={onItemChange} />
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}