export const getGithubUsername = (username?: string | null) => {
  if (username) return `@${username}`;

  return "";
};
