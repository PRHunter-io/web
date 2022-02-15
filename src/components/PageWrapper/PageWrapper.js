import React, { useEffect, useContext } from 'react';

import GlobalContext from '../../context/GlobalContext';

const headerConfigDefault = {
  bgClass: 'dynamic-sticky-bg',
  align: 'right',
  isFluid: false,
  reveal: true,
};

const footerConfigDefault = {
  theme: 'dark',
  style: 'style1', //style1, style2, style3
};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null,
}) => {
  const gContext = useContext(GlobalContext);

  useEffect(() => {
    gContext.setHeader({ ...headerConfigDefault, ...headerConfig });
    gContext.setFooter({ ...footerConfigDefault, ...footerConfig });
  }, [gContext.themeDark]);

  return <>{children}</>;
};

export default PageWrapper;
