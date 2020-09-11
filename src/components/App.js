import React from "react";
import Header from "./Header";
import KegList from "./KegList";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <KegList />
    </React.Fragment>
  );
}

export default App;