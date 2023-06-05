import {render,screen,cleanup} from '@testing-library/react';
import FlightSearch from '../FlightSearch/FlightSearch';
import { DataProvider } from '../../contextProvider';
test('Should render Flight Result component',()=>{
    
   render(<DataProvider><FlightSearch/></DataProvider>);
   const flightSearchElement = screen.getByTestId('flightSearchTest');
   expect(flightSearchElement).toBeInTheDocument();
})