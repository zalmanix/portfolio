import React from "react";
import Image from "next/image";

import { useTranslation } from "../hooks/useTranslation";
import { Text } from "./common/Text";
import { text } from "stream/consumers";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <section className="flex flex-col gap-6 pt-[126px] min-h-[550px] px-[8%]">
      <h2 className="py-8">{t.sub_header}</h2>

      <div className="flex flex-row gap-8 justify-between">
        <Image src="/me.png" width={250} height={250} alt={t.img_alt} />

        <Text className="pt-16 max-w-[70%]" text={t.description} />
      </div>
    </section>
  );
};
