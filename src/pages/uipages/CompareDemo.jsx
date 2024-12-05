import React from "react";
import { Compare } from "../../Components/ui/compare";
import second from '../../assets/Group 8 from Figma.png'
import first from '../../assets/Group 2.png'


export function CompareDemo() {
  return (
    (<div
      className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage={first}
        secondImage={second}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[350px] w-[300px] md:h-[700px] md:w-[700px]"
        slideMode="hover" />
    </div>)
  );
}
