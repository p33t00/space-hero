import React from "react";
import "./header.css";

export default class Header extends React.Component {
	render() {
		return (
			<div className="sh-header col-12 shadow-sm p-1 mb-3 bg-black rounded">
				<nav className="navbar navbar-expand-sm navbar-dark">
					<a className="navbar-brand" href="#">
						SW Rules !
					</a>
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
								<a className="nav-link">People</a>
							</li>
							<li className="nav-item active">
								<a className="nav-link">Planets</a>
							</li>
							<li className="nav-item">
								<a className="nav-link">Starships</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
