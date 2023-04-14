export const randomLightColor = (): string => {
  //Generate 3 values between 200 and 255 and return them as a rgb value string
  const values = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 55 + 200)
  );
  return "rgb(" + values.join(",") + ")";
};

export const lightTheme = {
  colors: {
    bg: "#ffff",
    bgButton: "lightblue",
    text: "#000",
  },
};

export const darkTheme = {
  colors: {
    bg: "#000",
    text: "#fff",
    bgButton: "grey",
  },
};

export const randomTheme = {};
