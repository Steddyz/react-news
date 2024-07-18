import React from "react";

import cl from "./BannersList.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBunner from "../NewsBunner/NewsBunner";

const BannerList = ({ banners }) => {
  return (
    <ul className={cl.banners}>
      {banners?.map((banner) => {
        return <NewsBunner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannerListWithSkeleton = withSkeleton(BannerList, "banner", 10, "row");

export default BannerListWithSkeleton;
