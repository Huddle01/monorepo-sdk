import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const Button = () => {
  const { address } = useAccount();

  console.log({ address });

  return (
    <div className="mx-auto my-4 w-fit">
      <ConnectButton />
      {/* <div className="bg-blue-500 shadow-md hover:opacity-80 transition duration-75 py-3 px-16 w-fit  mx-auto my-8 rounded-lg cursor-pointer text-center">
            Connect Wallet
          </div> */}
    </div>
  );
};

export default Button;
