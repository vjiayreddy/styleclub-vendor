import { useEffect } from "react";
import OneSignal from "react-onesignal";

const useOneSignal = () => {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONE_SIGNAL_KEY,
    });
  }, []);
};

export default useOneSignal;
