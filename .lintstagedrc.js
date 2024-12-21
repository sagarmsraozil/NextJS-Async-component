module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint -c ./.eslintrc.json ./', 'eslint', 'prettier --check -c ./.prettierrc.json ./src'],
  '**/*.ts?(x)': () => 'tsc --noEmit',
  '*.{json,yaml}': ['prettier --write -c ./.prettierrc.json ./src', 'prettier --check -c ./.prettierrc.json ./src']
};
