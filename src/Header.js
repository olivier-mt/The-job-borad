import "./App.css";
import Title from "./Title";

const Header = (props) => {
  return (
    <div className="header">
      <Title title={`${props.title}`}></Title>
    </div>
  );
};

export default Header;
