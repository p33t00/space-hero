import React from 'react';

const ItemDetailsView = (props) => {
    const {id, name, eye_color, gender, birth_year} = props.character;
    return (
        <React.Fragment>
            <img className="img-thumbnail" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                <ul>
                    <li>Name: <span>{name}</span></li>
                    <li>Gender: <span>{gender}</span></li>
                    <li>Birthdate: <span>{birth_year}</span></li>
                    <li>Eye Color: <span>{eye_color}</span></li>
                </ul>
        </React.Fragment>
    );
}

export default ItemDetailsView;