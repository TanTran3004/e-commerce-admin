const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage?.token}`,
    Accept: "application/json",
  },
};
