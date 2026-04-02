"use client";

import { createContext, useContext } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function Reservation() {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationContext.Provider
      value={{ range, setRange }}
    ></ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
