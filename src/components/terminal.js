var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { Terminal as XTerm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
// TODO fix relative imports and switch to absolute imports
import { executeCommand } from "../lib/commands";
import { Card } from "../components/ui/card";
var fileSystem = {
    directories: {
        "/": ["home"],
        "/home": ["user"],
        "/home/user": ["documents", "projects", "downloads"],
        "/home/user/documents": ["resume.pdf", "notes.txt"],
        "/home/user/projects": ["project1", "project2"],
        "/home/user/projects/project1": ["index.js", "README.md"],
        "/home/user/projects/project2": ["app.py", "requirements.txt"],
        "/home/user/downloads": ["movie.mp4", "song.mp3"],
    },
    currentPath: "/home/user",
};
export default function Terminal() {
    var _this = this;
    var terminalRef = useRef(null);
    var xtermRef = useRef(null);
    var commandHistoryRef = useRef([]);
    var historyIndexRef = useRef(-1);
    var currentLineRef = useRef("");
    var fileSystemRef = useRef(fileSystem);
    useEffect(function () {
        if (!terminalRef.current)
            return;
        var term = new XTerm({
            cursorBlink: true,
            fontFamily: "monospace",
            fontSize: 14,
            theme: {
                background: "#1a1b26",
                foreground: "#a9b1d6",
                cursor: "#c0caf5",
            },
        });
        var fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.open(terminalRef.current);
        fitAddon.fit();
        term.focus();
        var prompt = " $ ";
        var printPrompt = function () {
            term.write("\r" + prompt);
        };
        printPrompt();
        term.onKey(function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
            var ev, command, output, _i, _c, line, error_1, historyCommand, historyCommand, input, lastInput_1, dirContents, matches, completion;
            var key = _b.key, domEvent = _b.domEvent;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        ev = domEvent;
                        if (!(ev.key === "Enter")) return [3 /*break*/, 5];
                        term.writeln("");
                        command = currentLineRef.current.trim();
                        if (!command) return [3 /*break*/, 4];
                        commandHistoryRef.current.push(command);
                        historyIndexRef.current = -1;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, executeCommand(command, fileSystemRef.current)];
                    case 2:
                        output = _d.sent();
                        if (output === "__CLEAR__") {
                            term.clear();
                        }
                        else {
                            for (_i = 0, _c = output.split("\n"); _i < _c.length; _i++) {
                                line = _c[_i];
                                term.writeln(line.trim());
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _d.sent();
                        term.writeln("\rError executing command");
                        return [3 /*break*/, 4];
                    case 4:
                        currentLineRef.current = "";
                        printPrompt();
                        return [3 /*break*/, 6];
                    case 5:
                        if (ev.key === "Backspace") {
                            if (currentLineRef.current.length > 0) {
                                currentLineRef.current = currentLineRef.current.slice(0, -1);
                                term.write("\b \b");
                            }
                        }
                        else if (ev.key === "ArrowUp") {
                            if (commandHistoryRef.current.length > 0) {
                                if (historyIndexRef.current < commandHistoryRef.current.length - 1) {
                                    historyIndexRef.current++;
                                    historyCommand = commandHistoryRef.current[commandHistoryRef.current.length - 1 - historyIndexRef.current];
                                    while (currentLineRef.current.length > 0) {
                                        term.write("\b \b");
                                        currentLineRef.current = currentLineRef.current.slice(0, -1);
                                    }
                                    currentLineRef.current = historyCommand;
                                    term.write(historyCommand);
                                }
                            }
                        }
                        else if (ev.key === "ArrowDown") {
                            if (historyIndexRef.current > -1) {
                                historyIndexRef.current--;
                                while (currentLineRef.current.length > 0) {
                                    term.write("\b \b");
                                    currentLineRef.current = currentLineRef.current.slice(0, -1);
                                }
                                if (historyIndexRef.current >= 0) {
                                    historyCommand = commandHistoryRef.current[commandHistoryRef.current.length - 1 - historyIndexRef.current];
                                    currentLineRef.current = historyCommand;
                                    term.write(historyCommand);
                                }
                            }
                        }
                        else if (ev.key === "Tab") {
                            ev.preventDefault();
                            input = currentLineRef.current.trim().split(" ");
                            lastInput_1 = input[input.length - 1];
                            dirContents = fileSystemRef.current.directories[fileSystemRef.current.currentPath] || [];
                            matches = dirContents.filter(function (item) {
                                return item.startsWith(lastInput_1);
                            });
                            if (matches.length === 1) {
                                completion = matches[0].slice(lastInput_1.length);
                                currentLineRef.current += completion;
                                term.write(completion);
                            }
                            else if (matches.length > 1) {
                                term.writeln("");
                                matches.forEach(function (match) { return term.writeln(match); });
                                printPrompt();
                                term.write(currentLineRef.current);
                            }
                        }
                        else if (!ev.ctrlKey && !ev.altKey && key.length === 1) {
                            currentLineRef.current += key;
                            term.write(key);
                        }
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        xtermRef.current = term;
        var handleResize = function () {
            fitAddon.fit();
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
            term.dispose();
        };
    }, []);
    return (_jsx(Card, { className: "w-full h-[500px] overflow-hidden rounded-lg border bg-black", children: _jsx("div", { ref: terminalRef, className: "w-full h-full" }) }));
}
