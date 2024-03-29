import React, { useCallback } from "react";

import { useScrollDirection } from "../hooks/useScrollDirection";

// import { HeaderBtn } from "../../../common/HeaderBtn";
// import { Conditional } from "../../../Conditional";
// import { Dropdown } from "../../../common/Dropdown";
// import { useTranslation } from "../../../../hooks/useTranslation";
// import { options } from "../../../../constants/constants";

export const Header = () => {
  const { scrollDirection, yOffset } = useScrollDirection();
  // const { t } = useTranslation("header");
  // const router = useRouter();

  return (
    <header
      className={`${
        "down" === scrollDirection ? "-translate-y-36" : "translate-y-0"
      } transition duration-300 top-0 fixed z-[100] flex flex-row w-full min-h-[126px] bg-background-200`}
    >
      <div className="w-3/5 flex flex-row items-center pl-10 font-Inter">
        Main logo + buttons
      </div>

      <div className="w-2/5 flex flex-row items-center justify-end pr-10 font-Inter">
        Main Focus button
      </div>
    </header>
  );
};
