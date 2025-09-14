import React from "react";
import HowWeWorkClient from "./Client";

interface DescriptionObject {
  p1: string;
  p2: string;
  p3: string;
}

interface HowWeWorkObj {
  id: number;
  title: string;
  description: DescriptionObject;
  imagePath?: string | undefined;
}

type Props = {
  array: HowWeWorkObj[];
  howWeWorkMarkdown: string;
};

export const HowWeWork: React.FC<Props> = ({ array, howWeWorkMarkdown }) => {
  return (
    <section
      id="how-we-work"
      aria-label="How Renova Contractors work"
      className="container component-mb relative z-10"
    >
      <h2 className="inside-mb w-max custom-heading first-letter:text-main-yellow">
        How we work
      </h2>

      <HowWeWorkClient array={array} howWeWorkMarkdown={howWeWorkMarkdown} />
    </section>
  );
};
