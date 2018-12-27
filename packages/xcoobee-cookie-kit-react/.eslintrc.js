module.exports = {
  "extends": "airbnb",
  "env": {
      "browser": true,
      "es6": true
  },
  "globals": {
      "React": true,
      "XcooBee": true
  },
  "rules": {
      "linebreak-style": ["off", "unix"],
      "quotes": ["error", "double", { "avoidEscape": true }],
      "no-underscore-dangle": "off",
      "react/jsx-filename-extension": "off",
      "object-curly-newline": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/label-has-for": "off",
      "no-param-reassign": "off",
      "max-len": ["error", { "code": 120, "ignoreUrls": true }],
      "no-console": ["error", { "allow": ["error"] }]
  },
  "parser": "babel-eslint"
};
