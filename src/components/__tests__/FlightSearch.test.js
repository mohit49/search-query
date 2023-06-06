import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FlightSearch from "../FlightSearch/FlightSearch";
import { useContextData } from "../../contextProvider";

jest.mock("../../contextProvider"); // Mock the contextProvider module

describe("FlightSearch", () => {
  beforeEach(() => {
    useContextData.mockReturnValue({
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("calls the handleForm function on submit button click", () => {
    render(<FlightSearch />);

    // Simulate clicking the submit button
    fireEvent.click(screen.getByText("Submit"));

    // Check if the handleForm function is called
    expect(useContextData().setSearchButtonAction).toHaveBeenCalled();
  });
});
