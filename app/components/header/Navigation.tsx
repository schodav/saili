import { useState } from "react";
import LoginLogout from "../auth/LoginLogout";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setOpen(!open)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 2,
                }}
                viewBox="0 0 3000 2400"
                className="h-8 w-auto"
              >
                <g transform="matrix(1.30669 0 0 1.6178 -830.227 -616.776)">
                  <path
                    d="M2877.43 529c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99h1873.86Z"
                    style={{
                      fill: "#c0a9d2",
                    }}
                  />
                  <clipPath id="a">
                    <path d="M2877.43 529c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99h1873.86Z" />
                  </clipPath>
                  <g clipPath="url(#a)">
                    <path
                      d="M2670.7 601.935v195.13c0 37.494-26.77 67.935-59.74 67.935H638.739C605.768 865 579 834.559 579 797.065v-195.13C579 564.441 605.768 534 638.739 534H2610.96c32.97 0 59.74 30.441 59.74 67.935Z"
                      style={{
                        fill: "#fff",
                      }}
                      transform="matrix(1.11511 0 0 .792 318.211 172.996)"
                    />
                  </g>
                </g>
                <g transform="matrix(1.49287 0 0 1.6178 -1315.214 664.514)">
                  <path
                    d="M2877.43 529c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99h1873.86Z"
                    style={{
                      fill: "#97cff1",
                    }}
                  />
                  <clipPath id="b">
                    <path d="M2877.43 529c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99h1873.86Z" />
                  </clipPath>
                  <g clipPath="url(#b)">
                    <path
                      d="M2670.7 601.935v195.13c0 37.494-27.15 67.935-60.59 67.935H639.583C606.146 865 579 834.559 579 797.065v-195.13C579 564.441 606.146 534 639.583 534H2610.11c33.44 0 60.59 30.441 60.59 67.935Z"
                      style={{
                        fill: "#fff",
                      }}
                      transform="matrix(.96244 0 0 .792 396.273 172.996)"
                    />
                  </g>
                </g>
                <g transform="matrix(1.38638 0 0 1.6178 -1151.575 23.869)">
                  <path
                    d="M1003.57 529h1873.86c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99Z"
                    style={{
                      fill: "#ffdc60",
                    }}
                  />
                  <clipPath id="c">
                    <path d="M1003.57 529h1873.86c67.65 0-148.07 198-148.07 198s215.72 198 148.07 198H1003.57C935.922 925 881 880.64 881 826V628c0-54.64 54.922-99 122.57-99Z" />
                  </clipPath>
                  <g clipPath="url(#c)">
                    <path
                      d="M2670.7 601.935v195.13c0 37.494-29.16 67.935-65.08 67.935H644.073C608.158 865 579 834.559 579 797.065v-195.13C579 564.441 608.158 534 644.073 534H2605.62c35.92 0 65.08 30.441 65.08 67.935Z"
                      style={{
                        fill: "#fff",
                      }}
                      transform="matrix(.96484 0 0 .792 400.45 172.996)"
                    />
                  </g>
                </g>
                <path
                  d="M1223 533v815l-240.5-128.77L742 1348V533h481Z"
                  style={{
                    fill: "#f197a8",
                  }}
                  transform="matrix(.54342 0 0 .82537 151.196 -4.851)"
                />
              </svg>
              <h2 className="text-2xl font-extrabold text-white">SAILI</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current
                        ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                        : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LoginLogout />
          </div>
        </div>
      </div>

      {open && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={
                  item.current
                    ? "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                    : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
                aria-current="page"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
