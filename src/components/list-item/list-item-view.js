import React from 'react';


export default class ListItemView extends React.Component {
    formatCharacters = (chars) => {
        if(!chars) return null;
        return chars.map(c => {return <tr key={c.id} onClick={() => {this.props.onCharChange(c.id);}}><td>{c.name}</td></tr>});
    }

    render() {
        const {characters, onCharChange} = this.props;
        return (
            <table className="table table-hover table-sm">
                <tbody>
                    {this.formatCharacters(characters, onCharChange)}
                </tbody>
            </table>
        );
    }
}
