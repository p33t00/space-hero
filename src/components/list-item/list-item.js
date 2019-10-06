import React from "react";
import './list-item.css';

export default class ListItem extends React.Component {
	render() {
		return (
			<div className="sh-list-item col col-sm-auto shadow-sm order-sm-1 p-1 bg-black rounded">
				<table class="table table-hover table-sm">
					<tbody>
						<tr>
							<td>Luck Mofo</td>
						</tr>
						<tr>
							<td>Jim Mofo</td>
						</tr>
						<tr>
							<td>Francyski</td>
						</tr>
						<tr>
							<td>Luck Mofo</td>
						</tr>
						<tr>
							<td>Jacek bszykowski</td>
						</tr>
						<tr>
							<td>Harley D</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
