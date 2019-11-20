import React from 'react';
import { SwapiServiceConsumer } from '../../swapi-service-provider';

const withSwapiService = (Comp) => {
    return (
        <SwapiServiceConsumer>
            {(swapi) => {
                return (<Comp/>);
            }}
        </SwapiServiceConsumer>
    );
}

export { withSwapiService }