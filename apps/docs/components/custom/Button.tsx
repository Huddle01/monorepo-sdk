import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Button = () => {
  const { address, isConnected, isDisconnected } = useAccount();
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    if (apiKey.length && isDisconnected) {
      console.log("Wallet Disconnected");
      toast.success("Wallet Disconnected");
      setApiKey("");
      return;
    }

    if (!address && !isConnected) {
      console.log("No Wallet Connected");
      return;
    }
    (async () => {
      try {
        const getApiKeyResp = await axios("/api/auth/get-key", {
          method: "POST",
          data: {
            address,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        const { data: getApiKeyData } = getApiKeyResp;

        if (getApiKeyData.created) {
          const { apiKey } = getApiKeyData;
          setApiKey(apiKey);
        } else if (!getApiKeyData.created) {
          // do something
          const resp = await axios("/api/auth/create-api", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
              address,
            },
          });

          const { data } = resp;

          setApiKey(data.apiKey);
        }
      } catch (error) {
        console.error("Error: ", { error });
        toast.error("Unable to connect to server");
      }
    })();
  }, [address, isConnected, isDisconnected]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success("Api Key Copied to clipboard");
  };

  return (
    <>
      <div className="mx-auto my-4 w-fit">
        <ConnectButton />
      </div>
      {apiKey.length ? (
        <div
          onClick={handleCopyToClipboard}
          className="bg-[#2D3748] blur-sm cursor-pointer hover:blur-none transition duration-200 select-none w-fit mx-auto px-4 py-2 rounded-lg shadow-md truncate text-white text-center"
        >
          <p>{apiKey}</p>
        </div>
      ) : null}
      <Toaster position="bottom-right" />
    </>
  );
};

export default Button;
