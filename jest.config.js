// export default {
//   verbose: true,
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//   },
//   testEnvironment: 'jsdom',
// };


export default {
    verbose: true,
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    testEnvironment: "jest-environment-jsdom",
  };
  