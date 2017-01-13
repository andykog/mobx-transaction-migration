module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  return root
    .find(j.CallExpression, { callee: { name: 'transaction' }})
    .forEach(path => j(path).replaceWith(
        j.callExpression(j.identifier('runInAction'), path.value.arguments)
    ))
    .toSource();
}
