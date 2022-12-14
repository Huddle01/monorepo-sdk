import Link from "next/link";
import type { Feature } from "../content/features";

type FeatureProps = {
  feature: Omit<Feature, "page">;
  // include feature description
  detailed?: boolean;
};

const DetailedFeatureInner = (props: { feature: FeatureProps["feature"] }) => {
  const { name, description } = props.feature;

  
  return (
    <div className="flex flex-col gap-4 justify-evenly rounded-xl tablet:py-5 mob:py-6 tablet:px-6 mob:px-1 items-center">
      <div className=" bg-webRgbColors-6 rounded-xl text-3xl font-extrabold text-center px-14 py-24 w-full">
        GIF or Image
      </div>
      <div className="inline-flex items-center space-x-3">
        <h3 className="m-0 text-base font-semibold dark:text-white">{name}</h3>
      </div>
      <div>
        <p className=" text-sm text-center font-normal text-slate-400 dark:text-slate-400">
          {description}
        </p>

      </div>
    </div>
  );
};

const featureWrapperClasses = `block bg-custom-2 max-w-sm border border-slate-700 tablet:px-0 mob:px-4 shadow-lg rounded-xl`;

export const DetailedFeatureLink = (props: {
  href: string;
  feature: FeatureProps["feature"];
}) => {
  return (
    <Link href={props.href}>
      <a className={featureWrapperClasses}>
        <DetailedFeatureInner feature={props.feature}></DetailedFeatureInner>
      </a>
    </Link>
  );
};

export default function Feature(props: FeatureProps) {
  const { feature, detailed = false } = props;
  const { name, description } = feature;

  if (detailed) {
    return (
      <div className={featureWrapperClasses}>
        <DetailedFeatureInner feature={feature} />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div>
      </div>
      <div>
        <div className="my-0 font-medium dark:text-white">{name}</div>
      </div>
    </div>
  );
}
