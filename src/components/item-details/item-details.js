import React from 'react';
import './item-details.css';
// import ItemDetailsView from './item-details-view';
import SwapiService from "../../SwapiService";
// import SWError from '../sw-error/swerror';

export default class ItemDetails extends React.Component {
    swapi = new SwapiService();
    state = {
        itemData: null,
        imgUrl: null
    }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) return;
        const {itemID, getItemData, getImgUrl} = this.props;
        
        getItemData(itemID)
        .then(data => {this.setState({itemData: data, imgUrl: getImgUrl(itemID)})})
        .catch(e => console.error('Cannot get ItemData.'));
    }
    
    render () {
        if (!this.state.itemData) return <span>Select Character</span>;
        return (
            <div className="sh-item-details">
                <img className="img-thumbnail" src={this.state.imgUrl}/>
                <ul>
                    {React.Children.map(this.props.children, (child) => {return React.cloneElement(child, {item: this.state.itemData})})}
                </ul> 
            </div>
        );
    }
}