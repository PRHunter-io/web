import Link from 'next/link';

export const BountyPaymentReview = ({
  currency,
  bountyValue,
  commision,
  totalBountyValue,
  getUsdPrice,
}) => (
  <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
    <div className="row">
      <div className="col-lg-12">
        <span className="col-lg-6">Bounty value</span>
        <span className="col-lg-6 text-right">
          {parseFloat(bountyValue).toFixed(4)} {currency} (~ $
          {getUsdPrice(bountyValue).toFixed(2)})
        </span>
      </div>
      <div className="col-lg-12 mb-4">
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
          {commision.toFixed(4)} {currency} (~ $
          {getUsdPrice(commision).toFixed(2)})
        </span>
      </div>
      <div className="col-lg-12">
        <span className="col-lg-6 font-weight-bold">Total</span>
        <span className="col-lg-6 text-right font-weight-bold">
          {totalBountyValue.toFixed(4)} {currency} (~ $
          {getUsdPrice(totalBountyValue).toFixed(2)})
        </span>
      </div>
    </div>
  </div>
);
