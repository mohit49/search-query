import {render,screen,cleanup} from '@testing-library/react';
import FlightResult from '../FlightResult/FlightResult';
import { DataProvider } from '../../contextProvider';
test('Should render Flight Result component',()=>{
    
   render(<DataProvider><FlightResult/></DataProvider>);
   const flightResultElement = screen.getByTestId('flightResultTest');
   expect(flightResultElement).toBeInTheDocument();
})