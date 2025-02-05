import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "../components/ui/card";
import Terminal from "../components/terminal";
import { Command } from "lucide-react";
export default function Home() {
    return (_jsx("div", { children: _jsxs("div", { children: [_jsxs("header", { children: [_jsx(Command, {}), _jsx("h1", { children: "Jump CLI Tool Demo" })] }), _jsxs(Card, { children: [_jsxs("p", { children: ["This is an absolute barebones terminal with just enough functionality to demonstrate the", " ", _jsx("span", { style: { fontWeight: "bold" }, children: "jump CLI tool" }), "."] }), _jsx("h2", { children: "Instructions:" }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("code", { children: "jump list" }), " - Display all available jumps"] }), _jsxs("li", { children: [_jsx("code", { children: "jump add NAME" }), " ", "- Add a new jump location in the working directory"] }), _jsxs("li", { children: [_jsx("code", { children: "jump to NAME" }), " - Open a directory in VS Code"] }), _jsxs("li", { children: [_jsx("code", { children: "jump rm NAME" }), " - Remove a jump location"] })] })] }), _jsx(Terminal, {})] }) }));
}
