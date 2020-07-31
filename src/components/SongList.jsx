import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import { Item, Button, List } from "semantic-ui-react";

const SongList = ({ songs, selectSong }) => {
  const renderList = () => {
    return songs.map((song) => {
      return (
        <Item key={song.title}>
          <Item.Content>
            <Button
              floated="right"
              basic
              color="blue"
              onClick={() => selectSong(song)}
            >
              select
            </Button>
          </Item.Content>
          <Item.Content>{song.title}</Item.Content>
        </Item>
      );
    });
  };
  return <List>{renderList()}</List>;
};

const mapStateTopProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateTopProps, { selectSong })(SongList);
