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
var commands = {
    help: {
        description: "Show this help message",
        handler: function (_, __) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleHelpCommand()];
        }); }); },
    },
    clear: {
        description: "Clear the terminal",
        handler: function (_, __) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, "__CLEAR__"];
        }); }); }, // Special token for clearing terminal
    },
    echo: {
        description: "Echo back the arguments",
        handler: function (args, __) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, args.join(" ") || "No input provided."];
        }); }); },
    },
    version: {
        description: "Show CLI tool version",
        aliases: ["v"],
        handler: function (_, __) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, "CLI Tool Demo v1.0.0"];
        }); }); },
    },
    ls: {
        description: "List files in the current directory",
        handler: function (_, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleLsCommand(fileSystem)];
        }); }); },
    },
    pwd: {
        description: "Show the current working directory",
        handler: function (_, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, fileSystem.currentPath];
        }); }); },
    },
    mkdir: {
        description: "Create a new directory",
        handler: function (args, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleMkdirCommand(args, fileSystem)];
        }); }); },
    },
    cd: {
        description: "Change the current working directory",
        handler: function (args, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleCdCommand(args, fileSystem)];
        }); }); },
    },
    touch: {
        description: "Create a new file",
        handler: function (args, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleTouchCommand(args, fileSystem)];
        }); }); },
    },
    jump: {
        description: "Use the jump cli tool",
        handler: function (args, fileSystem) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, handleJumpCommand(args, fileSystem)];
        }); }); },
    },
};
var jumps = {
    p2: "/home/user/projects/project2",
};
function handleJumpCommand(args, fileSystem) {
    if (args.length === 0) {
        return "Usage: jump <add|to|list|rm>";
    }
    var subcommand = args.shift();
    switch (subcommand) {
        case "add":
            return jumpAdd(args, fileSystem);
        case "to":
            return jumpTo(args, fileSystem);
        case "list":
            return jumpList();
        case "rm":
            return jumpRemove(args);
        default:
            return "Unknown jump subcommand: ".concat(subcommand);
    }
}
function jumpAdd(args, fileSystem) {
    if (args.length < 1) {
        return "Usage: jump add <name> [-p <path>]";
    }
    var name = args[0];
    var pathIndex = args.indexOf("-p");
    var path = fileSystem.currentPath;
    if (pathIndex !== -1 && args.length > pathIndex + 1) {
        path = args[pathIndex + 1];
    }
    jumps[name] = path;
    return "Added jump '".concat(name, "' pointing to '").concat(path, "'");
}
function jumpTo(args, fileSystem) {
    if (args.length < 1) {
        return "Usage: jump to <name> [-i]";
    }
    var name = args[0];
    var inplace = args.includes("-i");
    if (!jumps[name]) {
        return "No jump found for '".concat(name, "'");
    }
    fileSystem.currentPath = jumps[name];
    return inplace
        ? "Changed directory to ".concat(jumps[name])
        : "Opening ".concat(jumps[name], " in VS Code...");
}
function jumpList() {
    if (Object.keys(jumps).length === 0) {
        return "No jumps have been added. Use 'jump add <name>' to add one.";
    }
    return Object.entries(jumps)
        .map(function (_a) {
        var name = _a[0], path = _a[1];
        return "".concat(name, " -> ").concat(path);
    })
        .join("\n");
}
function jumpRemove(args) {
    if (args.includes("--all")) {
        Object.keys(jumps).forEach(function (key) { return delete jumps[key]; });
        return "Removed all jumps.";
    }
    if (args.length < 1) {
        return "Usage: jump rm <name> or jump rm --all";
    }
    var name = args[0];
    if (!jumps[name]) {
        return "No jump found for '".concat(name, "'");
    }
    delete jumps[name];
    return "Removed jump '".concat(name, "'.");
}
function handleMkdirCommand(args, fileSystem) {
    if (args.length === 0 || args[0].trim() === "") {
        return "No directory name provided.";
    }
    var newDirName = args[0];
    var newPath = fileSystem.currentPath;
    // Ensure 'files' cannot be used as a directory name
    if (newDirName === "files") {
        return "'files' cannot be used as a directory name.";
    }
    // Handle absolute paths
    if (newDirName.startsWith("/")) {
        newPath = newDirName;
    }
    else {
        newPath += (newPath === "/" ? "" : "/") + newDirName;
    }
    // Check if directory already exists
    if (fileSystem.directories[newPath]) {
        return "Directory '".concat(newDirName, "' already exists.");
    }
    // Create the new directory
    fileSystem.directories[newPath] = [];
    // Add the new directory to the current directory's listing
    fileSystem.directories[fileSystem.currentPath].push(newDirName);
    return "Directory '".concat(newDirName, "' created successfully.");
}
function handleTouchCommand(args, fileSystem) {
    if (args.length === 0 || args[0].trim() === "") {
        return "No file name provided.";
    }
    var newFileName = args[0];
    var currentDirPath = fileSystem.currentPath;
    // Ensure files are not named 'directories'
    if (newFileName === "directories") {
        return "'directories' cannot be used as a file name.";
    }
    // Check if file already exists in the directory listing
    if (fileSystem.directories[currentDirPath].includes(newFileName)) {
        return "File '".concat(newFileName, "' already exists.");
    }
    // Add the new file to the current directory's listing
    fileSystem.directories[currentDirPath].push(newFileName);
    return "File '".concat(newFileName, "' created successfully.");
}
function handleLsCommand(fileSystem) {
    console.log("Current Path:", fileSystem.currentPath);
    console.log("Directory Contents:", fileSystem.directories[fileSystem.currentPath]);
    var contents = fileSystem.directories[fileSystem.currentPath] || [];
    return contents.join("\n");
}
function handleCdCommand(args, fileSystem) {
    if (args.length === 0 || args[0].trim() === "") {
        return "No argument given to cd";
    }
    var pathParts = args[0].split("/").filter(function (part) { return part !== ""; });
    var tempPath = fileSystem.currentPath;
    if (args[0] == "..") {
        if (tempPath === "/") {
            return "Already at the root directory.";
        }
        fileSystem.currentPath = tempPath.substring(0, tempPath.lastIndexOf("/"));
        return fileSystem.currentPath;
    }
    // Handle absolute paths
    if (args[0].startsWith("/")) {
        tempPath = "";
    }
    for (var _i = 0, pathParts_1 = pathParts; _i < pathParts_1.length; _i++) {
        var part = pathParts_1[_i];
        tempPath += (tempPath === "" ? "/" : "/") + part;
        if (!fileSystem.directories[tempPath]) {
            return "Directory not found";
        }
    }
    // Update currentPath only if all parts are valid
    fileSystem.currentPath = tempPath;
    return tempPath;
}
// Generate dynamic help message based on registered commands
function handleHelpCommand() {
    var helpLines = ["Available commands:"];
    for (var _i = 0, _a = Object.entries(commands); _i < _a.length; _i++) {
        var _b = _a[_i], cmd = _b[0], _c = _b[1], description = _c.description, aliases = _c.aliases;
        var aliasStr = aliases ? " (aliases: ".concat(aliases.join(", "), ")") : "";
        helpLines.push("".concat(cmd.padEnd(10), " - ").concat(description).concat(aliasStr));
    }
    return helpLines.join("\n");
}
// Suggest closest command if not found
function suggestCommand(input) {
    var commandNames = Object.keys(commands);
    var closestMatch = null;
    var shortestDistance = Infinity;
    for (var _i = 0, commandNames_1 = commandNames; _i < commandNames_1.length; _i++) {
        var command = commandNames_1[_i];
        var distance = levenshteinDistance(input, command);
        if (distance < shortestDistance && distance <= 3) {
            // Allow minor typos
            shortestDistance = distance;
            closestMatch = command;
        }
    }
    return closestMatch;
}
// Levenshtein Distance for typo detection
function levenshteinDistance(a, b) {
    var matrix = Array.from({ length: a.length + 1 }, function () {
        return Array(b.length + 1).fill(0);
    });
    for (var i = 0; i <= a.length; i++)
        matrix[i][0] = i;
    for (var j = 0; j <= b.length; j++)
        matrix[0][j] = j;
    for (var i = 1; i <= a.length; i++) {
        for (var j = 1; j <= b.length; j++) {
            var cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, // deletion
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j - 1] + cost);
        }
    }
    return matrix[a.length][b.length];
}
// Main command execution function
export function executeCommand(command, fileSystem) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, cmd, args, matchedCommand, handler, error_1, suggestion;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = command.trim().split(/\s+/), cmd = _a[0], args = _a.slice(1);
                    if (!cmd)
                        return [2 /*return*/, ""];
                    matchedCommand = Object.entries(commands).find(function (_a) {
                        var name = _a[0], aliases = _a[1].aliases;
                        return name === cmd.toLowerCase() ||
                            (aliases && aliases.includes(cmd.toLowerCase()));
                    }) || null;
                    if (!matchedCommand) return [3 /*break*/, 5];
                    handler = matchedCommand[1].handler;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, handler(args, fileSystem)];
                case 2: return [2 /*return*/, _b.sent()];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, "Error executing command: ".concat(error_1.message)];
                case 4: return [3 /*break*/, 6];
                case 5:
                    suggestion = suggestCommand(cmd);
                    return [2 /*return*/, suggestion
                            ? "Command not found: ".concat(cmd, "\nDid you mean '").concat(suggestion, "'?\nType 'help' to see available commands.")
                            : "Command not found: ".concat(cmd, "\nType 'help' to see available commands.")];
                case 6: return [2 /*return*/];
            }
        });
    });
}
