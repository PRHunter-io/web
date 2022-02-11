import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import imgL1LogoWhite from '../../../public/images/logo-main-white.svg';
import imgL1LogoBlack from '../../../public/images/logo-main-black.svg';

const Logo = ({ white, height, className = '', ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <Image src={imgL1LogoWhite} alt="" />
        ) : (
          <Image src={imgL1LogoBlack} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
