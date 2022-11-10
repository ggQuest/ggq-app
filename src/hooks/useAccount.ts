import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";

export const useAccount = () => {
  const { chainId, account, activate, active,library } = useWeb3React<Web3Provider>();

  // This helps us debug issues by passing in user address to the URL.
  const router = useRouter();
  const impersonatedUserAddress = router.query.debug as string;

  return impersonatedUserAddress || account;
};
