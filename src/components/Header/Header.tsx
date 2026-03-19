import { FingerprintPatternIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <div
            className="flex items-center gap-2 text-lg font-bold"
            aria-label="App Name">
            <FingerprintPatternIcon /> Basic Auth Profile
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/auth"}>Login</Link>
          <Link href={"/auth/register"}>Register</Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
