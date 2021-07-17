import {
  Container,
  Grid,
  Header,
  Segment,
  Statistic,
  Icon,
  Form,
  Button,
} from "semantic-ui-react";
import "./App.css";
import ButtonSaveorCancel from "./components/ButtonSaveorCancel";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="something" value="$10,00" />
      <EntryLine description="something else" value="$100,00" isExpense />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;