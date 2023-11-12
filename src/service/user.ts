export const getUser = async (username: string) => {
  const response = await fetch(`/api/users?username=${username}`, {
    method: "GET",
  });
  return {
    status: response.status,
    data: response.json(),
  };
};
