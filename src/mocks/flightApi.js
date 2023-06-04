// src/mocks.js
import { setupWorker, rest } from "msw";

// This configures a Service Worker with the given request handlers.
const airportsResult = {
  area: "Germany area airports",
  items: [
    {
      airport: "Berlin",
      code: "ber",
      country: "Germany",
    },
  ],
};

const flightResult = {
  items: [
    {
      origin: "FRA",
      originFullName: "Germany",
      startTime: "1:30 AM",
      endTime: "5:30 AM",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "10",
      amount: "128.26",
      currency: "EUR",
      offerType: "best-price",
      depDate: "2023-06-13",
      returnDate: "2023-06-28",
    },
    {
      origin: "FRA",
      originFullName: "Germany",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "8",
      amount: "128.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-13",
      returnDate: "2023-06-20",
      startTime: "6:30 AM",
      endTime: "10:30 AM",
    },
    {
      origin: "FRA",
      originFullName: "Germany",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "7",
      amount: "110.26",
      currency: "EUR",
      offerType: "best-price",
      depDate: "2023-06-13",
      returnDate: "2023-06-26",
      startTime: "12:30 PM",
      endTime: "8:30 PM",
    },
    {
      origin: "FRA",
      originFullName: "Germany",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "5",
      amount: "130.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-13",
      returnDate: "2023-06-20",
      startTime: "1:30 AM",
      endTime: "5:30 AM",
    },
    {
      origin: "FRA",
      originFullName: "Germany",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "8",
      amount: "100.26",
      currency: "EUR",
      offerType: "best-price",
      depDate: "2023-06-13",
      returnDate: "2023-06-30",
      startTime: "12:30 PM",
      endTime: "8:30 PM",
    },
    {
      origin: "FRA",
      originFullName: "Germany",
      originAriPortName: "Frankfurt Airport (Rhein-Main-Flughafen)",
      destination: "FCO",
      destinationFullName: "Italy",
      destinationAirPortName: "Rome - Fuimicino",
      seatAvailiblity: "3",
      amount: "100.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-13",
      returnDate: "2023-06-20",
      startTime: "1:30 AM",
      endTime: "5:30 AM",
    },

    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "	Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "10",
      amount: "100.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-13",
      returnDate: "2023-06-20",
      startTime: "6:30 AM",
      endTime: "10:30 AM",
    },
    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "10",
      amount: "100.26",
      currency: "EUR",
      offerType: "best-price",
      depDate: "2023-06-15",
      returnDate: "2023-06-25",
      startTime: "1:30 AM",
      endTime: "3:30 AM",
    },
    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "	Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "5",
      amount: "100.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-15",
      returnDate: "2023-06-20",
      startTime: "12:30 PM",
      endTime: "8:30 PM",
    },
    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "	Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "4",
      amount: "100.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-15",
      returnDate: "2023-06-20",
      startTime: "1:30 AM",
      endTime: "5:30 AM",
    },
    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "	Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "7",
      amount: "100.26",
      currency: "EUR",
      offerType: "all",
      depDate: "2023-06-15",
      returnDate: "2023-06-20",
      startTime: "5:30 AM",
      endTime: "8:30 AM",
    },
    {
      origin: "BER",
      originFullName: "Germany",
      originAriPortName: "Berlin",
      destination: "BRN",
      destinationFullName: "	Switzerland",
      destinationAirPortName: "Berne, Bern-Belp",
      seatAvailiblity: "3",
      amount: "100.26",
      currency: "EUR",
      offerType: "best-price",
      depDate: "2023-06-15",
      returnDate: "2023-06-28",
      startTime:'10:30 PM',
      endTime:'12:00 AM',
    },
  ],
};

export const flightApiLocation = setupWorker(
  rest.get("/flightApiSearch", (req, res, ctx) => {
    const airportKeyWord = req.url.search.split("=")[1];
    let resultArray = airportsResult.items.filter((ele, index) =>
      ele.airport.toLowerCase().includes(airportKeyWord)
    );

    return res(
      ctx.status(200),
      ctx.json({
        identifier: "result",
        items: resultArray,
      })
    );
  }),
  rest.get("/promotions/priceoffers/flights/ond/", (req, res, ctx) => {
    let filterdKey = {},
      filteredUrl = req.url.search.replace("?", "").split("&");
    filteredUrl.forEach((ele, index) => {
      filterdKey[ele.split("=")[0]] = ele.split("=")[1];
    });

    let results = flightResult.items.filter(
      (ele) =>
        ele.origin.toLocaleLowerCase() ===
          filterdKey.depLoc.toLocaleLowerCase() &&
        ele.destination.toLocaleLowerCase() ===
          filterdKey.arrLoc.toLocaleLowerCase()
    );
    console.log(results);
    return res(
      ctx.status(200),
      ctx.json({
        identifier: "result",
        items: results,
      })
    );
  })
);
