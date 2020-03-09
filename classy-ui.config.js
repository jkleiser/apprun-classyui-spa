module.exports = ({ tokens, screens }) => ({
  tokens: {
    ...tokens,
    fonts: {
      ...(tokens.fonts),
      ROBOTO: "Roboto"
    },
    size: {
      ...(tokens.size),
      SIZE_2: "4rem",
      SIZE_3: "6rem",
      SIZE_4: "8rem",
      SIZE_7: "14rem"
    }
  },
  screens
})
