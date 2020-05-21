import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "sosso", duration: "4:05" },
    { title: "macarena", duration: "2:30" },
    { title: "All start", duration: "3:13" },
    { title: "i want it that way", duration: "1:45" },
  ];
};

const selectedSongreducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongreducer,
});
