import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render () {
        return (
            <div className="sh-header col-12 shadow-sm p-1 mb-3 bg-black rounded">
                <nav className='flex-vertical-center navbar navbar-expand-lg justify-content-sm-between justify-content-center'>
                    <a class="navbar-brand" href="#">SW Rules</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link">People</a></li>
                        <li className="nav-item active"><a className="nav-link">Planets</a></li>
                        <li className="nav-item"><a className="nav-link">Starships</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}