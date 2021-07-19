import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      {entries.map((entry) => (
        <EntryLine
          description={entry.description}
          value={entry.value}
          isExpense={entry.isExpense}
        />
      ))}

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    description: "Work income",
    value: "$1000,00",
    isExpense: false,
  },
  {
    description: "Water bill",
    value: "$1000,00",
    isExpense: false,
  },
  {
    description: "Work income",
    value: "$20,00",
    isExpense: true,
  },
  {
    description: "Rent",
    value: "$300,00",
    isExpense: true,
  },
  {
    description: "Power bill",
    value: "$50,00",
    isExpense: true,
  },
];
