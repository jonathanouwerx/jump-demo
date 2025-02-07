import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Switch, Route } from "wouter";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import "./App.css";
function Router() {
    return (_jsxs(Switch, { children: [_jsx(Route, { path: import.meta.env.BASE_URL, component: Home }), _jsx(Route, { component: NotFound })] }));
}
function App() {
    return (_jsx(_Fragment, { children: _jsx(Router, {}) }));
}
export default App;
