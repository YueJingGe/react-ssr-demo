import { withRouter } from "next/router";

const FindLink = ({ router }) => {
  const style = {
    marginRight: 10,
    color: "red"
  };

  const handleClick = e => {
    e.preventDefault();
    router.push("/about");
  };

  return (
    <p>
      Welcome to Find!
      <div>
        <a onClick={handleClick} style={style}>
          关于我
        </a>
      </div>
    </p>
  );
};

export default withRouter(FindLink);
