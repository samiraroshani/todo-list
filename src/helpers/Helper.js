export const ConvertNumbers = (number) => {
  if (number) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return number
      .toString()
      .replace(/\d/g, x => farsiDigits[x]);
  }

  return null;
};
