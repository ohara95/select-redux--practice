import React from "react";
import { connect } from "react-redux";
import reducers from "../reducers";

const SongDetail = ({ song }) => {
  // console.log(props);
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  // reducers/indexより
  // キーはコンソールに出る名前
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
