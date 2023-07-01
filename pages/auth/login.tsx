import localFont from "next/font/local";
import Link from "next/link";
import { setCookie } from "cookies-next";

const font = localFont({src: [
  {
    path: "../fonts/Roboto-Thin.ttf",
    weight: "100",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Light.ttf",
    weight: "300",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Regular.ttf",
    weight: "400",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Medium.ttf",
    weight: "500",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Bold.ttf",
    weight: "700",
    style: "normal",
  },
  {
    path: "../fonts/Roboto-Black.ttf",
    weight: "900",
    style: "normal",
  }
]});

export default function AuthLogin() {
  const handleLogin = async () => {
    const cok = setCookie("_aA_AdC", true, {});
    return location.reload();
  }

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center py-5 mx-5 md:mx-24 xl:mx-24 ${font.className}`}>
      <div className="bg-white rounded-lg shadow py-9 px-5 w-full md:px-9 md:w-2/4 lg:w-2/4 xl:w-2/6">
        <h3 className="text-2xl">Sign in</h3>
        <div className="flex flex-col mt-10">
          <label htmlFor="email" className="text-sm font-semibold">Email</label>
          <input
            type="text"
            id="email"
            className="text-sm border rounded-lg outline-none px-3 py-2 mt-1.5"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="password" className="text-sm font-semibold">Password</label>
          <input
            type="text"
            id="password"
            className="text-sm border rounded-lg outline-none px-3 py-2 mt-1.5"
            autoComplete="off"
          />
        </div>
        <button className="w-full text-white text-sm bg-blue-600 rounded-lg py-3 mt-8" onClick={handleLogin}>Sign in</button>
        <div className="divider mt-6">OR</div>
        <div className="flex flex-col gap-3 mt-6">
          <button className="border text-sm rounded-lg py-2.5">Sign in with Google</button>
          <button className="border text-sm rounded-lg py-2.5">Sign in with Employee ID</button>
          <button className="border text-sm rounded-lg py-2.5">Sign in with phone number</button>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm mt-8">
          <Link href={""} className="text-blue-600">Forgot Password</Link>
          <div className="w-1 h-1 rounded-full bg-gray-400 mt-0.5"></div>
          <Link href={""} className="text-blue-600">Register demo account</Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-xs mt-8">
        <Link href={""} className="text-gray-400">Privacy policy</Link>
        <div className="w-1 h-1 rounded-full bg-gray-400 mt-0.5"></div>
        <Link href={""} className="text-gray-400">Terms of use</Link>
        <div className="w-1 h-1 rounded-full bg-gray-400 mt-0.5"></div>
        <Link href={""} className="text-gray-400">About AAADC Account</Link>
      </div>
    </div>
  )
}