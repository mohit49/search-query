// src/mocks.js
import { setupWorker, rest } from "msw";

// This configures a Service Worker with the given request handlers.

export const flightApiLocation = setupWorker(
  rest.post("/flightApi", (req, res, ctx) => {
    
    return res(
      ctx.status(200),
      ctx.json({
        identifier: "result",
        items: [
          {
            airport: "Gerona",
            code: "gro",
            country: "Spain",
          },
          {
            area: "Gerona area airports",
            items: [
              {
                airport: "Barcelona",
                code: "bcn",
                country: "Spain",
              },
            ],
          },
          {
            area: "Germany area airports",
            items: [
              {
                airport: "Berlin, all airports",
                code: "ber",
                country: "Germany",
              },
              {
                airport: "Berlin - Brandenburg",
                code: "ber",
                country: "Germany",
              },
              {
                airport: "Berlin main station",
                code: "qpp",
                country: "Germany",
              },
              {
                airport: "Bremen, all airports",
                code: "bre",
                country: "Germany",
              },
              {
                airport: "Bremen",
                code: "bre",
                country: "Germany",
              },
              {
                airport: "Bremen main station",
                code: "dhc",
                country: "Germany",
              },
              {
                airport: "Cologne, all airports",
                code: "cgn",
                country: "Germany",
              },
              {
                airport: "Cologne - Cologne/Bonn Airport",
                code: "cgn",
                country: "Germany",
              },
              {
                airport: "Cologne main station",
                code: "qkl",
                country: "Germany",
              },
              {
                airport: "Cologne, Messe Deutz Railway Station",
                code: "qku",
                country: "Germany",
              },
              {
                airport: "Dortmund, all airports",
                code: "dtm",
                country: "Germany",
              },
              {
                airport: "Dortmund",
                code: "dtm",
                country: "Germany",
              },
              {
                airport: "Dortmund main station",
                code: "dtz",
                country: "Germany",
              },
              {
                airport: "Dresden, all airports",
                code: "drs",
                country: "Germany",
              },
              {
                airport: "Dresden",
                code: "drs",
                country: "Germany",
              },
              {
                airport: "Dresden main station",
                code: "xir",
                country: "Germany",
              },
              {
                airport: "Dusseldorf, all airports",
                code: "dus",
                country: "Germany",
              },
              {
                airport: "Dusseldorf - North Rhine Westphalia",
                code: "dus",
                country: "Germany",
              },
              {
                airport: "Dusseldorf - Train Station",
                code: "qdu",
                country: "Germany",
              },
              {
                airport: "Erfurt, all airports",
                code: "erf",
                country: "Germany",
              },
              {
                airport: "Erfurt",
                code: "erf",
                country: "Germany",
              },
              {
                airport: "Erfurt - Railway Station",
                code: "xiu",
                country: "Germany",
              },
              {
                airport: "Frankfurt, all airports",
                code: "fra",
                country: "Germany",
              },
              {
                airport: "Frankfurt (Main) main station",
                code: "zrb",
                country: "Germany",
              },
              {
                airport: "Frankfurt/Main International",
                code: "fra",
                country: "Germany",
              },
              {
                airport: "Hamburg, all airports",
                code: "ham",
                country: "Germany",
              },
              {
                airport: "Hamburg",
                code: "ham",
                country: "Germany",
              },
              {
                airport: "Hamburg main station",
                code: "zmb",
                country: "Germany",
              },
              {
                airport: "Hannover, all airports",
                code: "haj",
                country: "Germany",
              },
              {
                airport: "Hannover",
                code: "haj",
                country: "Germany",
              },
              {
                airport: "Hannover main station",
                code: "zvr",
                country: "Germany",
              },
              {
                airport: "Karlsruhe, all airports",
                code: "fkb",
                country: "Germany",
              },
              {
                airport: "Karlsruhe - Hbf Railway Station",
                code: "kjr",
                country: "Germany",
              },
              {
                airport: "Karlsruhe / Baden Baden",
                code: "fkb",
                country: "Germany",
              },
              {
                airport: "Leipzig/ Halle, all airports",
                code: "lej",
                country: "Germany",
              },
              {
                airport: "Leipzig main station",
                code: "xit",
                country: "Germany",
              },
              {
                airport: "Leipzig/Halle",
                code: "lej",
                country: "Germany",
              },
              {
                airport: "Muenster-Osnabrueck, all airports",
                code: "fmo",
                country: "Germany",
              },
              {
                airport: "Muenster (Westphalia) main station",
                code: "mkf",
                country: "Germany",
              },
              {
                airport: "Muenster-Osnabrueck",
                code: "fmo",
                country: "Germany",
              },
              {
                airport: "Osnabrueck main station",
                code: "zpe",
                country: "Germany",
              },
              {
                airport: "Munich, all airports",
                code: "muc",
                country: "Germany",
              },
              {
                airport: "Munich",
                code: "muc",
                country: "Germany",
              },
              {
                airport: "Munich main station",
                code: "zmu",
                country: "Germany",
              },
              {
                airport: "Nuremberg, all airports",
                code: "nue",
                country: "Germany",
              },
              {
                airport: "Nuremberg",
                code: "nue",
                country: "Germany",
              },
              {
                airport: "Nuremberg Railway Station",
                code: "zaq",
                country: "Germany",
              },
              {
                airport: "Saarbrucken, all airports",
                code: "scn",
                country: "Germany",
              },
              {
                airport: "Saarbruecken - Ensheim",
                code: "scn",
                country: "Germany",
              },
              {
                airport: "Saarbruecken main station",
                code: "qfz",
                country: "Germany",
              },
              {
                airport: "Stuttgart, all airports",
                code: "str",
                country: "Germany",
              },
              {
                airport: "Stuttgart - Echterdingen",
                code: "str",
                country: "Germany",
              },
              {
                airport: "Stuttgart main station",
                code: "zws",
                country: "Germany",
              },
              {
                airport: "Aachen/Maastricht",
                code: "xhj",
                country: "Germany",
              },
              {
                airport: "Freiburg",
                code: "qfb",
                country: "Germany",
              },
              {
                airport: "Friedrichshafen",
                code: "fdh",
                country: "Germany",
              },
              {
                airport: "Goettingen",
                code: "zeu",
                country: "Germany",
              },
              {
                airport: "Heringsdorf",
                code: "hdf",
                country: "Germany",
              },
              {
                airport: "Kassel",
                code: "kwq",
                country: "Germany",
              },
              {
                airport: "Langeoog",
                code: "lgo",
                country: "Germany",
              },
              {
                airport: "Mannheim - Hbf Railway Station",
                code: "mhj",
                country: "Germany",
              },
              {
                airport: "Paderborn",
                code: "pad",
                country: "Germany",
              },
              {
                airport: "Rostock",
                code: "rlg",
                country: "Germany",
              },
              {
                airport: "Ulm",
                code: "qul",
                country: "Germany",
              },
              {
                airport: "Westerland",
                code: "gwt",
                country: "Germany",
              },
              {
                airport: "Wuerzburg",
                code: "qwu",
                country: "Germany",
              },
            ],
          },
        ],
      })
    );
  })
);
