module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // You can add or customize rules here
      'type-enum': [2, 'always', ['feat', 'fix', 'chore']]
    },
  };
  