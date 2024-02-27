import "./App.scss";
import Card from "./components/Card";
import CardItem from "./components/CardItem";
import Card_item from "./components/Card_item";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
// import Img1 from "./assets/IMAGE (4).png";
import Img2 from "./assets/IMAGE (3).png";
import Img3 from "./assets/IMAGE (5).png";
import Img5 from "./assets/IMAGE (6).png";
import Img6 from "./assets/IMAGE (7).png";
import Img7 from "./assets/IMAGE (8).png";
import Img8 from "./assets/IMAGE (9).png";
import Path from "./components/Path";
import Category from "./components/Category";
import { IoIosArrowDown } from "react-icons/io";

const arr = [
  {
    _id: 1,
    title: "WixPro 72-Inch Responsive Website Builder-",
    title_des:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    Main_highlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    img_name: "Builder 1",
    rating: "9.8",
    rev: "Exceptional",
    img: Img5,
    best: "Best Value",
    best_icon: Img2,
  },
  {
    _id: 2,
    title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
    title_des:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    Main_highlights:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    img_name: "Biulder",
    rating: "9.5",
    rev: "Excellent",
    img: Img6,
    best: "Best Choice",
    best_icon: Img3,
  },
  {
    _id: 3,
    title: "WixPro 72-Inch Responsive Website Builder-",
    title_des:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    Main_highlights:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    img_name: "Builder 1",
    rating: "9.3",
    rev: "Exceptional",
    img: Img5,
    best: "",
    best_icon: "",
  },
];

const path = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];

const category = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
];

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FBFCFD",
        }}
      >
        <div className="Main">
          <div className="header">
            <span>Best Website builders in the US</span>
          </div>
        <div className="Line"></div>
          <div className="Info">
            <div className="Info1">
              <div>
                <img src={Img7} alt="Img" />
                <p>Last Updated - February 22, 2020</p>
              </div>
              <div>
                <img src={Img8} alt="Img" />
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className="Info2">
              {" "}
              <p>Top Relevant</p>{" "}
              <p>
                <IoIosArrowDown />
              </p>{" "}
            </div>
          </div>
          <div className="Line"></div>
          <div style={{ display: "flex", margin: "1rem 0", flexWrap: "wrap" }}>
            {category?.map((e) => (
              <Category key={e} name={e} />
            ))}
          </div>
          
          <div style={{ display: "flex", margin: "1rem 0", flexWrap: "wrap" }}>
            {path?.map((e) => (
              <Path key={e} path={e} />
            ))}
          </div>

          {arr?.map((e) => (
            <CardItem key={e._id} deta={e} />
          ))}
          <Card_item />
          <div className="Title">Related deals you might like for</div>
          <div className="Card_box">
            <Card />
            <Card />
            <Card />
          </div>
          <Signup />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
