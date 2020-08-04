const getPreviousCount = rowIndex => {
  if (rowIndex === 0) return 0;
  return rowIndex + getPreviousCount(rowIndex - 1);
};

 export const convertIndex = (rowIndex, index = 0) => {
  return getPreviousCount(rowIndex) + index;
};
