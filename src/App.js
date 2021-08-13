import "./styles/App.scss";
import UIButton from "./components/layout/button/button";

function App() {
  return (
    <>
      <UIButton
        type="button"
        buttonStyle="btn-primary-solid"
        buttonSize="btn-normal"
      >
        +Add Feedback
      </UIButton>
      <UIButton
        type="button"
        buttonStyle="btn-icon-outlined"
        buttonSize="btn-normal"
      >
        Go Back
      </UIButton>
    </>
  );
}

export default App;
