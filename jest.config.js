module.exports = {
  collectCoverageFrom: [
    "!src/App.js",
    "!src/index.js",
    "src/**/*.js"
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    "html",
    "text"
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest"
  },
};