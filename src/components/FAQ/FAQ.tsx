"use client";

import Image from "next/image";
import right from "/public/logo/hero_right_arrow.svg";
import down from "/public/arrow/arrow_dropdown_down.svg";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqItems: FAQItem[];
};

export const FAQ: React.FC<FaqProps> = ({ faqItems }): JSX.Element => {
  const [clickedItems, setClickedItems] = useState<boolean[]>(
    Array(faqItems.length).fill(false) // ✅ динамика
  );

  const handleItemClick = (index: number): void => {
    setClickedItems((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <section
      id="faq"
      className="container scroll-anchor component-mb relative z-10"
    >
      <h2 className="w-max custom-heading first-letter:text-main-yellow">
        FAQ
      </h2>

      <ul className="w-full md:w-[650px] mx-auto">
        {faqItems.map((item, index) => (
          <li
            key={`q${index + 1}`}
            id={`q${index + 1}`}
          >
            <div
              onClick={() => handleItemClick(index)}
              className="flex items-center mb-[32px] text-main-gray font-medium text-title hover:cursor-pointer"
            >
              <Image
                src={clickedItems[index] ? down : right}
                height={25}
                width={25}
                alt=""
              />
              <h3 className="ml-[10px]">
                {item.question}
              </h3>
            </div>

            <div
              className={`mb-[32px] text-main-gray ${
                clickedItems[index] ? "block" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
