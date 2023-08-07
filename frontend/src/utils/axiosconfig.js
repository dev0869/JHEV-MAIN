const token = JSON.parse(localStorage.getItem("user"))?.token || null;

export const config = {
  headers: {
    authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
};
