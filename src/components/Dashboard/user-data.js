import { useAuth } from "@/context/AuthUserContext";
import { useState } from "react";

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
                                    <span className="mb-3">Metamask</span>
                                    <h6 className="font-weight-semibold">Integration settings coming soon</h6>
                                </div>
                                <div className="col-lg-6 mb-10">
                                    <span className="mb-3">Github</span>
                                    <GithubData />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const GithubData = () => {
    const { user, linkGithubAccount } = useAuth();
    const [errorMessage, setErrorMessage] = useState("")

    const tryToLinkUserAccount = async () => {
        try {
            setErrorMessage("")
            await linkGithubAccount()
            setErrorMessage("Account linked successfully")
        } catch (ex) {
            if(ex.code === "auth/credential-already-in-use"){
                setErrorMessage("This account is already linked to another user")
            }else{
                setErrorMessage(ex.message)
            }
            console.error(ex)
        }
    }

    const githubProvider = user.proactiveRefresh.user.reloadUserInfo.providerUserInfo.filter((provider) => { return provider.providerId === "github.com"; });
    if (githubProvider.length !== 0) {
        return (
            <h6 className="font-weight-semibold">Linked Github account: {githubProvider[0].screenName}</h6>
        )
    } else {
        return (
            <>
                <a
                    href="#"
                    onClick={tryToLinkUserAccount}
                    className="font-size-4 font-weight-semibold position-relative text-white bg-black h-px-48 flex-all-center px-6 rounded-5 mb-4"
                >
                    <i className="fab fa-github pos-xs-abs-cl font-size-7 ml-xs-4"></i>{" "}
                    <span className="d-none d-xs-block">
                        Link Github Account
                    </span>
                </a>
                {errorMessage ? <span className="text-danger">{errorMessage}</span> : ""}
            </>

        )
    }


}

const UserDataEntry = (props) => (
    <div className="col-lg-6 mb-4">
        <span className="mb-1">{props.label}</span>
        <h6 className="font-weight-semibold">{props.children}</h6>
    </div>
)