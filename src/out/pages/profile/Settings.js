"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Settings = () => {
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("h1", null, "Profile settings"),
        react_1.default.createElement("input", { type: "password" }),
        react_1.default.createElement("button", null, "Change")));
};
exports.default = Settings;
//# sourceMappingURL=Settings.js.map