import React from "react";
import { Container } from "semantic-ui-react";

function EntryLines() {
  return (
    <Container>
      {entries.map((entry) => (
        <EntryLine
          description={entry.description}
          value={entry.value}
          isExpense={entry.isExpense}
        />
      ))}
    </Container>
  );
}

export default EntryLines;
