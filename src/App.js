import "./styles/App.scss";
import UIButton from "./components/layout/buttons/uibutton/button";
import Dropdown from "./components/dropdowns/dropdown";
import Upvote from "./components/layout/buttons/upvote-btn/upvote";
import Themebtn from "./components/layout/buttons/theme-btn/themebtn";
import { ThemeProvider } from "@material-ui/core";

function App() {
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
        <Dropdown dropDownStyle="dropdown-dark"></Dropdown>
      </ThemeProvider>
    </>
  );
}

export default App;
