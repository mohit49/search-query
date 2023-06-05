import {render,screen,cleanup ,waitFor} from '@testing-library/react';
import FlightResult from '../FlightResult/FlightResult';
import { DataProvider } from '../../contextProvider';
import * as api from '../../api';
jest.mock('../../api');
test('Should render Flight Result component',()=>{

   render(<DataProvider><FlightResult/></DataProvider>);
   const flightResultElement = screen.getByTestId('flightResultTest');
   expect(flightResultElement).toBeInTheDocument();
});


