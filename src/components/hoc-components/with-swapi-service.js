import React from 'react';
import { SwapiServiceConsumer } from '../../swapi-service-provider';

const withSwapiService = (Comp, mapProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    swapi => {
                        return <Comp {...mapProps(swapi)} {...props}/>
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;