import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import FlightResult from "../FlightResult/FlightResult";
import * as ContextProvider from "../../contextProvider"; // Import the context provider

import Service from "../../api";

jest.mock("../../api"); // Mock the API module

describe("FlightResult", () => {
  beforeEach(() => {
    jest.spyOn(ContextProvider, "useContextData").mockReturnValue({
      roundType: "best-price",
      arrivalDate: new Date("2023-06-06"),
      depDate: new Date("2023-06-05"),
      depLocation: "Berlin",
      arrLocation: "Berne",
      searchButtonAction: true,
      setRoundType: jest.fn(),
      setSearchButtonAction: jest.fn(),
      setArrLocation: jest.fn(),
      setDepLocation: jest.fn(),
      setDepDate: jest.fn(),
      setArrivalDate: jest.fn(),
    });

    Service.prototype.get.mockResolvedValue({
      items: [
        { id: 1, name: "Flight 1" },
        { id: 2, name: "Flight 2" },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the FlightResult component", async () => {
    render(<FlightResult />);

    // Wait for the API call to resolve
    await waitFor(() => expect(Service.prototype.get).toHaveBeenCalled());

    // Check if the flight result container is rendered
    expect(screen.getByTestId("flightResultTest")).toBeInTheDocument();

    // Check if the number of results is displayed correctly
    expect(screen.getByText("2 results found")).toBeInTheDocument();

  });
});
