import { useSelector, useDispatch } from "react-redux";
import { setUser, setAuth } from "@/store/reducers/user";
import { useEffectOnce } from "usehooks-ts";
import { getCookie } from "cookies-next";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

const font = localFont({src: [
  {
    path: "../pages/fonts/Roboto-Thin.ttf",
    weight: "100",
    style: "normal",
  },
  {
    path: "../pages/fonts/Roboto-Light.ttf",
    weight: "300",
    style: "normal",
  },
  {
    path: "../pages/fonts/Roboto-Regular.ttf",
    weight: "400",
    style: "normal",
  },
  {
    path: "../pages/fonts/Roboto-Medium.ttf",
    weight: "500",
    style: "normal",
  },
  {
    path: "../pages/fonts/Roboto-Bold.ttf",
    weight: "700",
    style: "normal",
  },
  {
    path: "../pages/fonts/Roboto-Black.ttf",
    weight: "900",
    style: "normal",
  }
]});

interface LProps {
  children: React.ReactNode;
  title?: string;
}

export default function AppLayout({children, title}: LProps) {
  const {auth, user} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  
  useEffectOnce(() => {
    const cok = getCookie("_aA_AdC");
    if (cok && auth === false && !user) {
      dispatch(setAuth(true));
      dispatch(setUser(cok));
    }
  });

  return (<>
    <Head>
      <title>{title ?? "AAADC"}</title>
    </Head>
    <div className={font.className}>
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  </>);
}