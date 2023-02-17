import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import FooterDesc from "./components/footer/FooterDesc";

function App() {
  const [desc, setDesc] = useState(
    "Sint do anim ullamco et. Tempor excepteur officia sunt id velit do \
    cillum tempor officia labore. Labore fugiat officia exercitation ullamco \
    veniam pariatur voluptate anim laborum. Officia nostrud laboris laboris \
    et sunt eu eiusmod amet ea duis sunt. Commodo minim sunt sit qui sint \
    quis. Velit ea in consequat in ad id laboris. Anim anim deserunt aute \
    laborum dolore. Deserunt do dolor ullamco do cupidatat aute laboris ea. \
    Nisi sunt cupidatat in do. Exercitation sint aute Lorem consectetur \
    proident aliquip. Sint laboris labore est nostrud ipsum id. Sit ipsum ex \
    Lorem commodo irure deserunt Lorem mollit occaecat ut magna ea cillum. \
    Adipisicing irure aute occaecat fugiat. Laborum excepteur duis nostrud \
    nostrud. Commodo ullamco ex cillum nulla mollit Lorem eiusmod."
  );
  const [visible, setVisible] = useState(true);

  const changeDescription = (description) => {
    setDesc(description);
  };

  const changeVisibility = (isVisible) => {
    setVisible(isVisible);
  };

  return (
    <div className="container">
      <div className="content">
        <Header />
        <Main />
        <Footer changeVisibility={changeVisibility} visible={visible} />
        {visible && (
          <FooterDesc desc={desc} changeVisibility={changeVisibility} />
        )}
      </div>
    </div>
  );
}

export default App;
