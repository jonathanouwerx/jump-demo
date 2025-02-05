import { Card } from "../components/ui/card";
import Terminal from "../components/terminal";
import { Command } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div>
        <header>
          <Command />
          <h1>
            Jump CLI Tool Demo
          </h1>
        </header>

        <Card>
            <p>
            This is an absolute barebones terminal with just enough
            functionality to demonstrate the{" "}
            <span style={{ fontWeight: "bold" }}>jump CLI tool</span>.
            </p>
          <h2>
            Instructions:
          </h2>
          <ul>
            <li>
              <code>jump list</code> -
              Display all available jumps
            </li>
            <li>
              <code>jump add NAME</code>{" "}
              - Add a new jump location in the working directory
            </li>
            <li>
              <code>jump to NAME</code> -
              Open a directory in VS Code
            </li>
            <li>
              <code>jump rm NAME</code> -
              Remove a jump location
            </li>
          </ul>
        </Card>

        <Terminal />
      </div>
    </div>
  );
}
