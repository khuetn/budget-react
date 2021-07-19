import React, { Fragment } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit />
    </Fragment>
  );
}

export default EntryLine;
