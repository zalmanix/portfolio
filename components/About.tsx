import React from "react";
import Image from "next/image";

import { useTranslation } from "../hooks/useTranslation";
import { Text } from "./common/Text";
import { H2 } from "./common/H2";

export const About = () => {
  const { t } = useTranslation("about");

  return (
    <section className="flex flex-col justify-center gap-6 mt-[250px] min-h-[550px] px-[8%] bg-background-200">
      <p className="uppercase font-Inter">Two words about me</p>

      <H2 text={t.sub_header} className="pb-12 pt-2" />

      <div className="flex flex-row gap-8 justify-between">
        <Image
          className="rounded-full"
          src="/me.png"
          width={250}
          height={250}
          alt={t.img_alt}
        />

        <Text className="pt-16 max-w-[70%]" text={t.description} />
      </div>
    </section>
  );
};
