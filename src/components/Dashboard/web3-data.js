// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { Box, Button, Text } from "../Core";
import { formatEther } from "@ethersproject/units";


export const Web3Data = () =>  {
    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    console.log(etherBalance);

    return account ? (
      <Box>
        <h6 className="font-weight-semibold">
        {account}
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </h6>
      </Box>
    ) : (
      <Button onClick={activateBrowserWallet}>Get wallet address from metamask</Button>
    );
  }