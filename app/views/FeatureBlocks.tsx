import { ReactNode } from "react";


import { GradientText } from "../components/GradientText";



// Built with Vivid (https://vivid.lol) ⚡️

const BlockTitle = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-bold text-strong">{children}</h3>;
};

const BlockText = ({ children }: { children: ReactNode }) => {
  return <p className="text-light">{children}</p>;
};

const Block = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">{children}</div>
    </div>
  );
};

export const FeatureBlocks = () => {
  return (
    <div className="gap-16 text-center">
      {/* Header */}
      <div className="gap-4 col">
        <h2>
          Make styling a{" "}
          <GradientText className="purple-teal">breeze</GradientText>
        </h2>
        <p>
          Stop wasting your time. Vivid makes CSS easier than recursive
          depth-first search.
        </p>
      </div>
      {/* Blocks */}
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {/* Block 1 */}
        <Block>
          <BlockTitle>In-browser</BlockTitle>
          <BlockText>
            Edit your styling from the most natural place — where it renders
          </BlockText>
        </Block>
        {/* Block 2 */}
        <Block>
          <BlockTitle>Code first</BlockTitle>
          <BlockText>
            Use Vivid&apos;s command palette and code pane to edit styling using
            code
          </BlockText>
        </Block>
        {/* Block 3 */}
        <Block>
          <BlockTitle>Modern frameworks</BlockTitle>
          <BlockText>
            Build components using Vivid in React styled with Tailwind CSS
          </BlockText>
        </Block>
      
      </div>
  </div>
  );
};
