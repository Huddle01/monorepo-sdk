import clone from "git-clone/promise";

export const downloadRepo = async (
  repoName: string,
  name: string,
  isTs: boolean
) =>
  await clone(
    `https://github.com/Huddle01/${repoName}${isTs ? "-ts" : ""}`,
    name
  );
