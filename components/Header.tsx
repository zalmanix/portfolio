import React, { useCallback } from "react";

// import { HeaderBtn } from "../../../common/HeaderBtn";
// import { Conditional } from "../../../Conditional";
// import { Dropdown } from "../../../common/Dropdown";
// import { useScrollDirection } from "../../../../hooks/useScrollDirection";
// import { useTranslation } from "../../../../hooks/useTranslation";
// import { options } from "../../../../constants/constants";

export const Header = () => {
  // const { scrollDirection, yOffset } = useScrollDirection();
  // const { t } = useTranslation("header");
  // const router = useRouter();
  // const handleLanguageChange = useCallback(
  //   (changeResponse: { value: string; label: string }) => {
  //     const path = router.pathname;
  //     const pathToReplace = path.replace("[locale]", changeResponse.value);

  //     router.replace(pathToReplace);
  //   },
  //   [router]
  // );

  return (
    <header className="top-0 fixed z-[100] flex flex-row w-full min-h-[126px]">
      <div className="w-3/5 bg-slate-500 flex flex-row items-center">
        Main logo + buttons
      </div>

      <div className="w-2/5 bg-slate-600 flex flex-row items-center justify-end">
        Main Focus button
      </div>
    </header>
  );
};
