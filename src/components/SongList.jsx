import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import { Item, Button, List } from "semantic-ui-react";

class SongList extends Component {
  renderList() {
    // selectSong();//オブジェクトが返るだけ？
    // console.log(this.props);
    return this.props.songs.map((song) => {
      return (
        <Item>
          <Item.Content right floated>
            <Button onClick={() => this.props.selectSong(song)}>select</Button>
          </Item.Content>
          <Item.Content>{song.title}</Item.Content>
        </Item>
      );
    });
  }

  render() {
    return <List>{this.renderList()}</List>;
  }
}

const mapStateTopProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateTopProps, { selectSong })(SongList);

// const SongList = () => {
//   return <div>SongList</div>;
// };

// const mapStateTopProps = (state) => {
//   return { songs: state.songs };
// };

// export default connect(mapStateTopProps)(SongList);
