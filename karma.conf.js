module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "src/**/*.ts"
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript"
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    karmaTypescriptConfig: {
      compilerOptions: {
        module: "commonjs"
      },
      tsconfig: "./tsconfig.json",
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