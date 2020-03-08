module.exports = ({ tokens, screens }) => ({
  tokens: {
    ...tokens,
    fonts: {
      ...(tokens.fonts),
      ROBOTO: "Roboto"
    },
    size: {
      ...(tokens.size),
      SIZE_4: "8rem",
      SIZE_7: "14rem"
    }
  },
  screens
})
