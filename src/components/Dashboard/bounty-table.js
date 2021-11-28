import { BountyListView } from "./bounty-list-view";
import { useUserBounties } from "@/lib/swr";
import { Spinner } from "react-bootstrap";

const BountyTable = () => {

    const { bounties, isLoading, isError } = useUserBounties()

    if (isLoading) return (
        <BountyTableInner content={
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        } />
    )

    if (isError) return (
        <BountyTableInner content={
            <div>
                Error
            </div>
        } />
    )

    return (
        <BountyTableInner children={bounties.map(bounty => <BountyListView bounty={bounty} />)}/>
    )
}

const BountyTableInner = props => {
    return (
        <div className="mb-14">
            <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                    <h3 className="font-size-6 mb-0">Posted bounties (12)</h3>
                </div>
            </div>
            <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
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
                                    Created at
                                </th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BountyTable;