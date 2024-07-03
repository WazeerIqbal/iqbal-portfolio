"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("./components/Header"));
var Herosection_1 = __importDefault(require("./components/Herosection"));
var Feature_1 = __importDefault(require("./components/Feature"));
var Projects_1 = __importDefault(require("./components/Projects"));
var Footer_1 = __importDefault(require("./components/Footer"));
var Wordpressprojects_1 = __importDefault(require("./components/Wordpressprojects"));
var About_1 = __importDefault(require("./Pages/About"));
require("./App.css");
function App() {
    var scrollToSection = function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<>
      <Header_1.default scrollToSection={scrollToSection}/>
      <react_router_dom_1.Routes>



        <react_router_dom_1.Route path="/" element={<>
              <main>
                <section id="home">
                  <Herosection_1.default />
                </section>
                <section id="software-tech">
                  <Feature_1.default />
                </section>
                <section id="projects">
                  <Projects_1.default />

                </section>
                <section>
                  <Wordpressprojects_1.default />
                </section>
              </main>
            </>}/>
        <react_router_dom_1.Route path="/about" element={<About_1.default />}/>


      </react_router_dom_1.Routes>
      <Footer_1.default scrollToSection={scrollToSection}/>
    </>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map