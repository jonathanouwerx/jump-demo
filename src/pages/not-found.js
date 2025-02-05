import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "./../components/ui/card";
import { AlertCircle } from "lucide-react";
export default function NotFound() {
    return (_jsx("div", { children: _jsx(Card, { children: _jsxs(CardContent, { children: [_jsxs("div", { children: [_jsx(AlertCircle, {}), _jsx("h1", { children: "404 Page Not Found" })] }), _jsx("p", { children: "Did you forget to add the page to the router?" })] }) }) }));
}
