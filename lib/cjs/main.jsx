"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var App_1 = __importDefault(require("./App"));
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />

    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>);
//# sourceMappingURL=main.jsx.map