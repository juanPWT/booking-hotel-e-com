export const rupiah = (money: number) => {
  const format = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(money);

  return format;
};
