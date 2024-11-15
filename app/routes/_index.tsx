import type { MetaFunction } from "@remix-run/node";
import { SignedIn, SignedOut } from "@clerk/remix";
import LoginLogout from "~/components/auth/LoginLogout";
import Home from "~/components/views/Home";
import Dashboard from "~/components/views/Dashboard";

export const meta: MetaFunction = () => {
  return [
    { title: "SAILI - By Students For Students" },
    { name: "description", content: "Welcome to Saili!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between p-4 border-b border-slate-500 shadow-md bg-slate-100">
        <div>LOGO</div>
        <LoginLogout />
      </header>

      <main>
        <div className="flex flex-col items-center gap-16">
          <div className="mt-16">
            <SignedOut>
              <Home />
            </SignedOut>
            <SignedIn>
              <Dashboard />
            </SignedIn>
          </div>
        </div>
      </main>
    </div>
  );
}
