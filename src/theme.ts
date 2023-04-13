const randomDarkColor = (): string => {
  //Generate random hex number between 0 and 8388607 (0x7FFFFF) and convert it to a string
  const value = Math.floor(Math.random() * 8388607).toString(16);
  //Add # to the beginning of the color
  return "#" + value;
};
const randomLightColor = (): string => {
  //Generate random hex number between 8388608 (0x7FFFFF) and 16777215 (0xFFFFFF) and convert it to a string
  const value = Math.floor(Math.random() * 8388607 + 8388608).toString(16);
  //Add # to the beginning of the color
  return "#" + value;
};

export const theme = {
  main: randomLightColor(),
  light: {
    border: "1px solid #000000",
    background: randomLightColor(),
    color: "#000000",
  },
  dark: {
    border: "1px solid #FFFFFF",
    background: "#000000",
    color: "#FFFFFF",
  },
};
