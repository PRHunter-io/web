import BountyTable from "@/components/Dashboard/bounty-table";
import React from "react";
import PageWrapper from "@/components/PageWrapper";

const DashboardMain = () => {

  const fetcher = (url) => fetch(url).then((res) => res.json())


  const { data, error } = useSWR('/user/bounties', fetcher)


  const [bounties, setBounties] = useState([])
  const bountiesCount = data ? data.length : 0;

//   const getData = async (reqBody) => {
//     const url = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/user/bounty`;
//     const data = JSON.stringify(reqBody);

//     try {
//         const res = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: data
//         });
//         const newData = await res.json();
//         return newData;
//     } catch (err) {
//         console.error('Failed to fetch bounty:', err)
//     }
//     return [];
// }

  return (
    <>
      <PageWrapper
        headerConfig={{
          button: "profile",
          isFluid: true,
          bgClass: "bg-default",
          reveal: false,
        }}
      >
        <div className="dashboard-main-container mt-25 mt-lg-31">
          <div className="container">
            <BountyTable bounties={data} />
            <div className="mb-18">
              <div className="row mb-11 align-items-center">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <h3 className="font-size-6 mb-0">Completed bounties (0)</h3>
                </div>
              </div>
              <div className="bg-white shadow-8 pt-7 rounded pb-8 px-11">
                  <span>Looks like you don't have any completed bounties yet.</span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default DashboardMain;
