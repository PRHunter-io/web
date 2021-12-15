import Link from "next/link";
import landingPic3 from "public/images/landing-pic-3.jpeg";
import Image from 'next/image'

const BountySent = () => {


  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="text-muted text-center">Your bounty has been created!</h2>

      <Image
        src={landingPic3}
        alt=""
        data-aos="zoom-in"
        data-aos-duration="6500"
        data-aos-delay="300"
        className="w-100 rounded-4 my-3"
      />

      <Link href="/bounties">
        <a className="line-height-reset btn-submit btn-xl text-uppercase btn btn-primary px-7">
          Browse bounties
        </a>
      </Link>
    </div>
  );
}

export default BountySent;