import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:04" },
    { title: "All Star", duration: "3:59" },
    { title: "Bamboleo", duration: "2:35" },
    { title: "Quit Playing Games with my Heart", duration: "2:35" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
