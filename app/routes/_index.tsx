import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { SignedIn, SignedOut } from "@clerk/remix";
import LoginLogout from "~/components/auth/LoginLogout";
import Home from "~/components/views/Home";
import Dashboard from "~/components/views/Dashboard";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "SAILI - By Students For Students" },
    { name: "description", content: "Welcome to Saili!" },
  ];
};

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, async ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    // fetch data
    console.log({
      sessionId,
      userId,
      getToken: await getToken(),
    });
    return { yourData: "here" };
  });
};

export default function Index() {
  const data = useLoaderData();

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
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </main>
    </div>
  );
}
