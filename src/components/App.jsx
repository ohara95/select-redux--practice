import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { Grid, GridColumn } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <Grid container>
        <Grid.Row>
          <GridColumn width={8}>
            <SongList />
          </GridColumn>
          <GridColumn width={8}>
            <SongDetail />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default App;
