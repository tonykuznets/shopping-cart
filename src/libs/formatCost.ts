export const formatCost = (cost: number) => {
  return cost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ');
};
