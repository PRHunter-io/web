import { BountyListView } from "./bounty-list-view";



const BountyTable = (bounties) => {

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
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                >
                                    Applied as
                                </th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                >
                                    Applied on
                                </th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                ></th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                ></th>
                                <th
                                    scope="col"
                                    className="border-0 font-size-4 font-weight-normal"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <BountyListView />
                            <BountyListView />
                            <BountyListView />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BountyTable;