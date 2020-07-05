module.exports = () => {
  const plugins = {
    autoprefixer: {
      flexbox: 'no-2009',
    },
    cssnano: {},
  };
  return { plugins };
};
