const useAbbrevation = (value) => {
  const formatted = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
  return formatted;
};

export default useAbbrevation;
