import Link from "next/link";

import { iconGitHub } from "./icons";

export function GitHubButton() {
  return (
    <Link
      href="https://github.com/fencesitter1"
      className="ml-auto"
    >
      <button className="flex items-center rounded-md bg-main-100 px-3 py-2 text-sm font-medium text-main-500 ring-4 ring-white  duration-500 transition-colors hover:bg-main-300">
        {iconGitHub}
        <span className="ml-2">Open Source</span>
      </button>
    </Link>
  );
}
