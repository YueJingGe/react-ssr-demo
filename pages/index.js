import Link from "next/link";
import Router from "next/router";

export default () => (
  <div>
    <p>
      <Link prefetch href="/app">
        <a>app</a>
      </Link>
    </p>
    <p>
      <Link prefetch href={{ pathname: "/home", query: { name: "Zeit" } }}>
        <a>home</a>
      </Link>
    </p>
    <p>
      <a onClick={() => Router.push("/find")}>find</a>
    </p>
    <p>
      <Link prefetch href="/about">
        <a>about</a>
      </Link>
    </p>
  </div>
);
