import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper";
import Sidebar from "../../components/Sidebar";
import Router from 'next/router';
import { BountiesListRegular, BountiesListGrid } from "../../components/BountiesLists";

export const getServerSideProps = async ({ query }) => {
  const bountiesUrl = process.env.NEXT_PUBLIC_INTERNAL_API_URL + '/bounty';

  try {
    const res = await fetch(bountiesUrl)
    const bounties = await res.json()
    return {
      props: {
        bounties,
        query
      },
    }
  } catch (err) {
    console.error('Failed to fetch bounty:', err)
  }
}

const getData = async (reqBody, setfilteredData) => {
  const formattedBody = { ...reqBody };
  if (formattedBody.price_to) {
    formattedBody.price = {
      min: reqBody.price_min,
      to: reqBody.price_to,
      currency: reqBody.currency
    };
    delete formattedBody.price_min;
    delete formattedBody.price_to;
    delete formattedBody.currency;
  }

  for (const key in formattedBody) {
    if (Object.hasOwnProperty.call(formattedBody, key)) {
      const element = formattedBody[key];
      if (element.length === 0) {
        delete formattedBody[key];
      }
    }
  }

  const data = JSON.stringify(formattedBody);
  try {
    const res = await fetch('/api/filters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    const newData = await res.json();

    setfilteredData(newData.data);
  } catch (err) {
    console.error('Failed to fetch bounty:', err)
  }
}

const SearchGrid = ({ bounties, query }) => {
  const [filteredData, setfilteredData] = useState(false);

  const bountiesCount = bounties ? bounties.length : 0;

  const [fullQuery, setFullQuery] = useState(query);
  const [titleValue, setTitleValue] = useState(fullQuery.title ? fullQuery.title : '');

  const updateQuery = (data) => {
    Router.push({
      pathname: '/bounties',
      query: data,
    },
      undefined, { shallow: true }
    );
    getData(fullQuery, setfilteredData);
  };

  const handleForm = e => {
    e.preventDefault();

    if (!titleValue) {
      setFullQuery(prevState => (
        {
          ...prevState,
          title_or_body: []
        }
      ));

      return;
    };

    setFullQuery(prevState => (
      {
        ...prevState,
        title_or_body: titleValue
      }
    ));
  }

  useEffect(() => {
    if (Object.keys(fullQuery).length !== 0) {
      updateQuery(fullQuery);
    }
  }, [fullQuery])

  return (
    <>
      <PageWrapper>
        <div className="bg-default-1 pt-26 pt-lg-28 pb-13 pb-lg-25">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-5 col-xs-8">
                <Sidebar fullQuery={fullQuery} setFullQuery={setFullQuery} />
              </div>
              {/* <!-- Main Body --> */}
              <div className="col-12 col-xl-8 col-lg-8">
                {/* <!-- form --> */}
                <form
                  className="search-form"
                  onSubmit={handleForm}
                >
                  <div className="filter-search-form-2 search-1-adjustment bg-white rounded-sm shadow-7 pr-6 py-6 pl-6">
                    <div className="filter-inputs">
                      <div className="form-group position-relative w-lg-45 w-xl-40 w-xxl-45 flex-grow-1">
                        <input
                          className="form-control focus-reset pl-13"
                          type="text"
                          id="keyword"
                          name="title"
                          placeholder="Find a bounty"
                          value={titleValue}
                          onChange={e => setTitleValue(e.target.value)}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-zoom-2 text-primary"></i>
                        </span>
                      </div>
                      {/* <!-- .select-city starts --> */}
                      {/* <div className="form-group position-relative w-lg-55 w-xl-60 w-xxl-55">
                        <Select
                          name="experience"
                          options={experienceLevel}
                          className="pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100"
                          border={false}
                          queryValue={expValue}
                          onChange={(e) => {
                            setExpValue(e.value)
                          }}
                        />
                        <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6">
                          <i className="icon icon-business-agent text-primary"></i>
                        </span>
                      </div> */}
                      {/* <!-- ./select-city ends --> */}
                    </div>
                    <div className="button-block">
                      <button className="btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase">
                        Search
                      </button>
                    </div>1
                  </div>
                </form>
                <div className="pt-12">
                  <div className="d-flex align-items-center justify-content-between mb-6">
                    <h5 className="font-size-4 font-weight-normal text-gray">
                      <span className="heading-default-color">{filteredData ? filteredData.total : bountiesCount}</span> results
                    </h5>
                    <div className="d-flex align-items-center result-view-type">
                    </div>
                  </div>

                  {bounties ? (<BountiesListRegular bounties={filteredData ? filteredData.content : bounties} />) : <div>loading</div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default SearchGrid;
