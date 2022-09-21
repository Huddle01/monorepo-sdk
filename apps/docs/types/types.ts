export type TSocialDataType = {
  id: number;
  icon: JSX.Element;
  link: string;
};

export type TNavData = {
  id: number;
  name: string;
  href: string;
}[];

export type TNavigationType = {
  [key: string]: TNavData;
};

export type TExtrenalLinksType = {
  [key: string]: string;
};
