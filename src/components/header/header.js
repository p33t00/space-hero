import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";

export default class Header extends React.Component {
	render() {
		return (
			<div className="sh-header col-12 shadow-sm p-1 mb-3 bg-black rounded">
				<nav className="navbar navbar-expand-sm navbar-dark">
					<Link to='/' className="navbar-brand">
						SW Rules !
					</Link>
					<button
						className="navbar-toggler mr-3 text-white"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
                        <i className="fa fa-bars" aria-hidden="true"></i>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to='/people/' className="nav-link">People</Link>
							</li>
							<li className="nav-item">
								<Link to='/planets/' className="nav-link">Planets</Link>
							</li>
							<li className="nav-item">
								<Link to='/starships/' className="nav-link">Starships</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
