import Main from "./components/Main";
import First from "./components/First";
import Second from "./components/Second";
import Seperation from "./components/small/Seperation";
import FAQPage from "./components/faqs/FAQPage";
import Footer from "./components/Footer";
import {
  first,
  second,
  third,
  fourth,
} from "./components/assets/content_options";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Seperation />
      <First
        fHeading={first.heading}
        fPara={first.fPara}
        fImage={first.image}
        fVideo={first.video}
      />
      <Seperation />
      <Second
        sImage={second.image}
        sHeading={second.heading}
        sPara={second.fPara}
      />
      <Seperation />
      <First
        fHeading={third.heading}
        fPara={third.fPara}
        fImage={third.image}
        fVideo={third.video}
      />
      <Seperation />
      <Second
        sImage={fourth.image}
        sHeading={fourth.heading}
        sPara={fourth.fPara}
      />
      <Seperation />
      <FAQPage />
      <Seperation />
      <Footer />
    </div>
  );
}

export default App;
