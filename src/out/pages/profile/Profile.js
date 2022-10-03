"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Info_jsx_1 = __importDefault(require("./Info.jsx"));
const Settings_jsx_1 = __importDefault(require("./Settings.jsx"));
const Profile = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Profile page"),
        react_1.default.createElement("header", null,
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "info" }, "Profile Info")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "settings" }, "Profile Settings")))),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "info", element: react_1.default.createElement(Info_jsx_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "settings", element: react_1.default.createElement(Settings_jsx_1.default, null) }))));
};
exports.default = Profile;
//# sourceMappingURL=Profile.js.map