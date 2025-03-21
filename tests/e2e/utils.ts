export const getUniqueId = () => {
  return Math.random().toString(36).substring(2, 15);
};

export const getUniqueEmail = () => {
  return `test${getUniqueId()}@email.com`;
};
