import { useUsdPricing } from '@/lib/crypto-pricing';
import Link from 'next/link';

export const BountyPaymentReview = ({
  currency,
  bountyValue,
  commision,
  totalBountyValue,
}) => {
  const { getUsdPrice } = useUsdPricing();

  return (
    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
      <div className="row">
        <span className="col-lg-6">Bounty value</span>
        <span className="col-lg-6 text-right">
          {parseFloat(bountyValue).toPrecision(4)} {currency} (~ $
          {getUsdPrice(bountyValue, currency)})
        </span>
      </div>

      <div className="row mb-4">
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
        <span className="col-md-6 text-right">
          {commision.toPrecision(4)} {currency} (~ $
          {getUsdPrice(commision, currency)})
        </span>
      </div>
      <div className="row">
        <span className="col-md-6 font-weight-bold">Total</span>
        <span className="col-md-6 text-md-right font-weight-bold">
          {totalBountyValue.toPrecision(4)} {currency} (~ $
          {getUsdPrice(totalBountyValue, currency)})
        </span>
      </div>
    </div>
  );
};
