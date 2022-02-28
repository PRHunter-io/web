import { useCryptoPrices } from './swr';

export const useUsdPricing = () => {
  const { cryptoPrices, isLoading } = useCryptoPrices();

  const getUsdPrice = (param, currency) => {
    if (isLoading) {
      return 0.0;
    } else {
      const value =
        cryptoPrices.filter((t) => t.currency == currency)[0].usd_value * param;
      return value.toFixed(2);
    }
  };

  return { getUsdPrice };
};
