import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "aaaa", duration: "1:00" },
    { title: "bbbb", duration: "2:00" },
    { title: "cccc", duration: "3:00" },
    { title: "dddd", duration: "4:00" },
  ];
};

// selectedSongは曲が入る変数？
const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SONG_SELECTED":
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
