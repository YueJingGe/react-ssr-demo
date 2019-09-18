import dynamic from "next/dynamic";

const HelloBundle = dynamic({
  modules: () => {
    const components = {
      Connect: import("../components/connect"),
      Address: import("../components/address")
    };

    return components;
  },
  render: (props, { Connect, Address }) => (
    <div>
      <h1>{props.title}</h1>
      <Connect />
      <Address />
    </div>
  )
});

export default () => (
  <div>
    <HelloBundle title="关于我：" />
  </div>
);
