import React from "react";
import { DOCS_FEATURES, HOME_FEATURES } from "../content/features";
import Feature from "./Feature";

export function HomeFeatures() {
  return (
    <DetailedFeaturesGrid>
      {HOME_FEATURES.map((feature) => (
        <Feature
          key={feature.name.split(" ").join("-")}
          feature={feature}
          detailed
        />
      ))}
    </DetailedFeaturesGrid>
  );
}

export function DocsFeatures({ detailed = true }: { detailed?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-6 my-12 sm:grid-cols-3 ">
      {DOCS_FEATURES.map((feature) => (
        <Feature
          key={feature.name.split(" ").join("-")}
          feature={feature}
          detailed={detailed}
        />
      ))}
    </div>
  );
}

export function DetailedFeaturesGrid({
  children,
}) {
  return (
    <div className="grid grid-cols-1  lg:px-36 sm:px-0 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16  lg:gap-x-12 lg:gap-y-12">
      {children}
    </div>
  );
}
