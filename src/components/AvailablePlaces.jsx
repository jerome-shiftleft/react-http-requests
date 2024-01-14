import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [AvailablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }

    fetchPlaces();

    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []); // end of useEffect(() => {

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={true}
      loadingText='Fetching place data...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
