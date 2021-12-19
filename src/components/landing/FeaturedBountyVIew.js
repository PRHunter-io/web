import TechIcon from "@/components/Icons/TechIcon";
import Link from "next/link";

export const FeaturedBountyView = (bounty) => (
    <div
        className="col-12 col-lg-4 col-md-6 px-xxl-7"
        data-aos="fade-up"
        data-aos-duration="800"
    >
        {/* <!-- Start Feature One --> */}
        <div className="bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments">
            <div className="d-block mb-7">
                <TechIcon language="javascript" />
            </div>
            <Link href="/#">
                <a className="font-size-3 d-block mb-0 text-gray">
                    Google INC
                </a>
            </Link>
            <h2 className="mt-n4">
                <Link href="/#">
                    <a className="font-size-7 text-black-2 font-weight-bold mb-4">
                        Product Designer
                    </a>
                </Link>
            </h2>
            <ul className="list-unstyled mb-1 card-tag-list">
                <li>
                    <Link href="/#">
                        <a className="bg-regent-opacity-15 text-denim font-size-3 rounded-3">
                            <i className="icon icon-pin-3 mr-2 font-weight-bold"></i>{" "}
                            Berlyn
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#">
                        <a className="bg-regent-opacity-15 text-orange font-size-3 rounded-3">
                            <i className="fa fa-briefcase mr-2 font-weight-bold"></i>{" "}
                            Full-time
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/#">
                        <a className="bg-regent-opacity-15 text-eastern font-size-3 rounded-3">
                            <i className="fa fa-dollar-sign mr-2 font-weight-bold"></i>{" "}
                            80K-90K
                        </a>
                    </Link>
                </li>
            </ul>
            <p className="mb-7 font-size-4 text-gray">
                We are looking for Enrollment Advisors who are looking to take
                30-35 appointments per week. All leads are pre-scheduled.
            </p>
            <div className="card-btn-group">
                <Link href="/#">
                    <a className="btn btn-green text-uppercase btn-medium rounded-3">
                        Apply Now
                    </a>
                </Link>
                <Link href="/#">
                    <a className="btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3">
                        <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                        Save it
                    </a>
                </Link>
            </div>
        </div>
        {/* <!-- End Feature One --> */}
    </div>
)