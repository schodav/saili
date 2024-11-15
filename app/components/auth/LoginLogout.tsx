import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";

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
              <button className="border rounded-md px-4 py-1">Log in</button>
            </SignInButton>
          </div>
          <div>
            <SignUpButton mode="modal">
              <button className="border rounded-md px-4 py-1">Sign Up</button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}
