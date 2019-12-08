import React from 'react';
import PropTypes from 'prop-types';
import './list-item.css';

export default ElementView => {
    return class extends React.Component {
        static defaultProps = {
           onItemChange: () => {}
        }

        static propTypes = {
            onItemChange: PropTypes.func,
            itemData: PropTypes.arrayOf(PropTypes.object).isRequired
        }

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