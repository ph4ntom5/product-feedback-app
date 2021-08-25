import Button from "@material-ui/core/Button";
import "./button.scss";

const STYLES = [
  "btn-primary-solid",
  "btn-secondary-solid",
  "btn-dark-solid",
  "btn-warning-solid",
  "btn-icon-solid",
  "btn-icon-outlined",
];

const SIZES = ["btn-normal", "btn-medium"];

const UIButton = ({ children, type, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Button
      className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      disableRipple="true"
      type={type}
    >
      {children}
    </Button>
  );
};

export default UIButton;
