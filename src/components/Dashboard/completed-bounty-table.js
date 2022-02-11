import { BountyListView } from './bounty-list-view';
import { useUserBounties, useUserCompletedBounties } from '@/lib/swr';
import { Spinner } from 'react-bootstrap';

const CompletedBountyTable = () => {
  const { bounties, isLoading, isError } = useUserCompletedBounties();

  if (isLoading)
    return (
      <BountyTableInner
        content={
          <div className="row align-items-center justify-content-center">
            <Spinner animation="border" role="status">
              <h5 className="visually-hidden">Loading...</h5>
            </Spinner>
          </div>
        }
      />
    );

  if (isError) return <BountyTableInner content={<div>Error</div>} />;

  return (
    <BountyTableInner bountyCount={bounties.length}>
      {bounties.map((bounty) => (
        <BountyListView key={bounty.id} bounty={bounty} />
      ))}
    </BountyTableInner>
  );
};

const BountyTableInner = (props) => {
  return (
    <div className="mb-14">
      <div className="row mb-11 align-items-center">
        <div className="col-lg-6 mb-lg-0 mb-4">
          <h3 className="font-size-6 mb-0">
            Completed bounties ({props.bountyCount})
          </h3>
        </div>
      </div>
      <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
        {props.bountyCount > 0 ? (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="pl-0  border-0 font-size-4 font-weight-normal"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="border-0 font-size-4 font-weight-normal"
                  >
                    Bounty Value
                  </th>
                  <th
                    scope="col"
                    className="border-0 font-size-4 font-weight-normal"
                  >
                    Completed at
                  </th>
                  <th
                    scope="col"
                    className="border-0 font-size-4 font-weight-normal"
                  />
                </tr>
              </thead>
              <tbody>{props.children}</tbody>
            </table>
          </div>
        ) : (
          <span>Looks like you don't have any completed bounties yet.</span>
        )}
      </div>
    </div>
  );
};

export default CompletedBountyTable;
