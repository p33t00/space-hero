import React from "react";

const RandPlanetView = ({planet}) => {
	const { id, name, created, terrain, population, rotationPeriod } = planet;
	return (
        <React.Fragment>
            <div>
                <img
                    // className="d-block"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                />
            </div>
            <div className="rp-desc">
            <h3 className="h3">{name}</h3>
            <ul>
                <li>
                    Population <span>{population}</span>
                </li>
                <li>
                    Terrain <span>{terrain}</span>
                </li>
                <li>
                    Rotation Period <span>{rotationPeriod}</span>
                </li>
                <li>
                    Created <span>{`${created}`}</span>
                </li>
            </ul>
        </div>
        </React.Fragment>
	);
};

export default RandPlanetView;