import api from "../configs/api";

const getProfile = async () => {
  return api.get("auth/login").then((res) => res || false);
};
export { getProfile };
