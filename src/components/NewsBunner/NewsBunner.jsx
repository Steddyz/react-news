import React from "react";
import Image from "../Image/Image";
import { formatTimeAgo } from "../../helpers/formatTimeAgo";

import cl from "./NewsBunner.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const NewsBunner = ({ item }) => {
  return (
    <div className={cl.banner}>
      <Image image={item?.image} />
      <h3 className={cl.title}>{item.title}</h3>
      <p className={cl.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBunner, "banner", 1);

export default NewsBannerWithSkeleton;
