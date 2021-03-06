const storage = require("node-persist");

export const get = async (req, res, next): Promise<number> => {
  const accountBalance = storage.getItem("accountBalance");

  return await accountBalance.then((balance) => res.json(balance)).catch(next);
};

export default {
  get,
};
