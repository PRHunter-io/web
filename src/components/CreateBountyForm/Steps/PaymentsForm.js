import React, { useEffect } from 'react';
import { MyTextInput, MySelect, MyDatePicker } from '../fields';
import { bountyCurrency } from '@/utils/filters';
import { BountyService } from '../service';
import Link from 'next/link';
import { useUsdPricing } from '@/lib/crypto-pricing';

export const PaymentsForm = ({
  bountyValue,
  currency,
  commision,
  setCommision,
  totalBountyValue,
  setTotalBountyValue,
  repository,
  issue,
}) => {
  const { getUsdPrice } = useUsdPricing();

  useEffect(() => {
    const commision = BountyService.calculateCommision(bountyValue);
    setCommision(commision);
  }, [bountyValue]);

  useEffect(() => {
    if (bountyValue !== '') {
      setTotalBountyValue(parseFloat(bountyValue) + parseFloat(commision));
    } else {
      setTotalBountyValue(parseFloat(commision));
    }
  }, [bountyValue, commision]);

  return (
    <>
      <fieldset disabled={issue === null || repository.existingBounty}>
        <div className="row">
          <MySelect
            label="Currency (Blockchain)"
            name="currency"
            tooltip="The platform on which the contract will be created"
          >
            {bountyCurrency.values.map((exp) => (
              <option key={exp.value} value={exp.value}>
                {exp.label}
              </option>
            ))}
          </MySelect>
          {currency === 'ETH' && (
            <span className="text-danger mb-4">
              Note: we strongly advise using Binance Smart Chain instead of
              Ethereum due to high transaction fees on the Ethereum network.
              More details{' '}
              <Link href="/docs#eth-fees">
                <a target="_blank"> here</a>
              </Link>
            </span>
          )}
        </div>
        <div className="row">
          <MyDatePicker
            label="Expiration date"
            name="expirationDate"
            tooltip="Minimum bounty duration is 7 days. You will have to lock in your funds in the smart contract for that period"
          />
        </div>
        <div className="row">
          <MyTextInput
            label="Bounty amount"
            name="bountyAmount"
            type="number"
            tooltip="Enter the bounty value in the selected currency. Make sure you have such amount available in your wallet, as you will have to deposit it into the smart contract."
          />
        </div>
        <div className="row mb-4">
          <div className="col-lg-12">
            <span className="col-lg-6">
              <span>Operational fee</span>
              <Link href="/docs#operational-fee">
                <a
                  target="_blank"
                  className="ml-2 text-gray font-size-3 font-weight-light"
                >
                  {' '}
                  (why is this needed?)
                </a>
              </Link>
            </span>

            <span className="col-lg-6 text-right">
              {commision.toPrecision(4)} {currency} (~ $
              {getUsdPrice(commision, currency)})
            </span>
          </div>
          <div className="col-lg-12">
            <span className="col-lg-6">Total</span>
            <span className="col-lg-6 text-right font-weight-bold">
              {totalBountyValue.toPrecision(4)} {currency} (~ $
              {getUsdPrice(totalBountyValue, currency)})
            </span>
          </div>
        </div>
      </fieldset>
    </>
  );
};
