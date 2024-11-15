import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/remix";

export default function LoginLogout() {
  return (
    <div>
      <SignedIn>
        <div className="flex items-center gap-4">
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center gap-4 ">
          <div>
            <SignInButton mode="modal">
              <button className="text-sm/6 font-semibold text-gray-300">
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
