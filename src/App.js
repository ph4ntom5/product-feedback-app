import "./styles/App.scss";
import UIButton from "./components/layout/buttons/uibutton/button";
import Dropdown from "./components/dropdowns/dropdown";
import SortBy from "./components/dropdowns/sortby/sortby";
import Getsorted from "./components/dropdowns/getsorted/getsorted";
import Upvote from "./components/layout/buttons/upvote-btn/upvote";
import Themebtn from "./components/layout/buttons/theme-btn/themebtn";
import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <ThemeProvider>
        <UIButton
          type="button"
          buttonStyle="btn-primary-solid"
          buttonSize="btn-normal"
        >
          +Add Feedback
        </UIButton>
        <UIButton
          type="button"
          buttonStyle="btn-icon-solid"
          buttonSize="btn-normal"
        >
          Go Back
        </UIButton>
        <Upvote type="button" buttonStyle="btn-upvote-icon"></Upvote>
        <Themebtn>UX</Themebtn>
        <Dropdown></Dropdown>
        <SortBy SortByStyle="sort-dark"></SortBy>
        <Getsorted selected={selected} setSelected={setSelected}></Getsorted>
      </ThemeProvider>
    </>
  );
}

export default App;
