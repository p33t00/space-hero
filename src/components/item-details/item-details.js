import React from 'react';
import PropTypes from 'prop-types';
import './item-details.css';

export default class ItemDetails extends React.Component {
    state = {
        itemData: null,
        imgUrl: null
    }

    static propTypes = {
        itemData: PropTypes.arrayOf(PropTypes.object).isRequired,
        imgUrl: PropTypes.string.isRequired
    }
    
    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return;
        const {itemID, getItemData, getImgUrl} = this.props;
        getItemData(itemID)
        .then(data => {this.setState({itemData: data, imgUrl: getImgUrl(itemID)})})
        .catch(e => console.error(`Cannot get ItemData. ${e}`));
    }
    
    render () {
        if (!this.state.itemData) return <span>Select Character</span>;
        return (
            <div className="sh-item-details">
                <img className="img-thumbnail" src={this.state.imgUrl}/>
                <ul>
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item: this.state.itemData})})}
                </ul> 
            </div>
        );
    }
}