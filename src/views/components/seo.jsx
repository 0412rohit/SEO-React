import React from "react";
import { Helmet } from "react-helmet-async";

const SeoHelmet = ({ title, metaName, metaContent, linkHelmet }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`${metaContent} created using create-react-app`}
          data-rh="true"
        />
        <link rel="canonical" href={linkHelmet} />
      </Helmet>
    </>
  );
};
export default SeoHelmet;
