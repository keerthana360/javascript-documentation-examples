module.exports = {
  src: [
    './src/',
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './docs',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'javascript-documentation-examples-events-noEventEmitter',
  ignoreCompilerErrors: true,
};
