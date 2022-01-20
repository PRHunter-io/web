// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { Box, Button, Text } from "../Core";
import { formatEther } from "@ethersproject/units";


export const Web3Data = () =>  {
    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    console.log(etherBalance)
  
    return account ? (
      <Box>
        <Text>
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
        <Text fontSize="md" fontWeight="medium" mr="2">
          
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
      </Box>
    ) : (
      <Button>Connect to a wallet</Button>
    );
  }