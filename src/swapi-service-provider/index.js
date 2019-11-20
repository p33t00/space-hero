import React from 'react';
import SwapiService from './SwapiService';

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext();

export default {
    SwapiService,
    SwapiServiceProvider,
    SwapiServiceConsumer
}