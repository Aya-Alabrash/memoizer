module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "src/**/*.spec.ts"
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    karmaTypescriptConfig: {
      reports:
      {
        "cobertura": {
          "directory": "coverage",
          "filename": "coverage.xml",
          "subdirectory": "cobertura"
        },
        "html": "coverage",
        "text-summary": ""
      }
    }
  });
};