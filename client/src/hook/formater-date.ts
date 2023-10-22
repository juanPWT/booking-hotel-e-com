export const formatDateIndo = (date: Date) => {
  const changeFormatedDate = date.toLocaleDateString("id-ID", {
    dateStyle: "full",
  });

  return changeFormatedDate;
};
