import { GithubData } from "./github-data"
import { Web3Data } from "./web3-data"

export const UserData = ({ userData }) => {
    return (
        <div className="container">
            <div className="mb-15 mb-lg-23">
                <div className="row">
                    <div className="col-xxxl-9">
                        <h5 className="font-weight-semibold mb-11">
                            Account settings
                        </h5>
                        <div className="bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13">
                            <div className="row mb-10">
                                <UserDataEntry label="Email">
                                    {userData.email ? userData.email : 'missing'}
                                </UserDataEntry>
                                <UserDataEntry label="Name">
                                    {userData.display_name ? userData.display_name : 'missing'}
                                </UserDataEntry>
                            </div>

                            <h5 className="font-weight-semibold mb-11">
                                Linked accounts
                            </h5>
                            <div className="row mb-10">
                                <div className="col-lg-6 mb-10">
                                    <span className="mb-3">Web3 wallet</span>
                                    <div>
                                        <Web3Data />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-10">
                                    <span className="mb-3">Github</span>
                                    {/* <GithubData /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const UserDataEntry = (props) => (
    <div className="col-lg-6 mb-4">
        <span className="mb-1">{props.label}</span>
        <h6 className="font-weight-semibold">{props.children}</h6>
    </div>
)