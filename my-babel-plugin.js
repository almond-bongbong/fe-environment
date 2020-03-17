module.exports = function myBabelPlugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        const kind = path.node.kind;

        // 바벨이 만든 AST 노드를 출력한다.
        console.log('VariableDeclaration() kind: ', kind);

        // 변환작업
        if (path.node.kind === 'const') {
          path.node.kind = 'var';
        }
      }
    },
  };
};