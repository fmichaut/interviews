// DO NOT TOUCH, THIS IS JUST TO CHECK YOUR TYPE

import Datatable from "./Datatable";
import useMyQuery from "./hook";

export default function App() {
  return (
    <>
      <Datatable
        query={useMyQuery}
        name="myQuery"
        variables={{
          id: "string",
          checked: false
        }}
      />
      <Datatable
        query={useMyQuery}
        name="foo" // should crash
        variables={{
          id: "string",
          checked: "string" // should crash
        }}
      />
    </>
  );
}
