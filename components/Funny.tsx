import React from "react";

import { useTranslation } from "../hooks/useTranslation";
import { Text } from "./common/Text";
import { H2 } from "./common/H2";

export const Funny = () => {
  const { t } = useTranslation("funny");

  return (
    <section className="flex flex-col gap-6 pt-[5%] min-h-[550px] px-[8%]">
      <p className="pt-36 uppercase">{t.sub_header}</p>

      <H2 text={t.header} className="pb-12 pt-2" />

      <Text text={t.description} />
    </section>
  );
};
