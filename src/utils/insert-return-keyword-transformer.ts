import {
  Node,
  Visitor,
  visitNode,
  isSourceFile,
  isJsxElement,
  visitEachChild,
  TransformerFactory,
  isExpressionStatement,
  isJsxSelfClosingElement,
} from 'typescript';

export function insertReturnKeywordTransformer<
  T extends Node
>(): TransformerFactory<T> {
  return context => {
    const visit: Visitor = node => {
      if (isExpressionStatement(node)) {
        const expr = node.expression;

        if (isJsxElement(expr) || isJsxSelfClosingElement(expr)) {
          // Slightly hacky but figures out if the JSX element was
          // a top-level JSX expression in the "source file" before
          // we wrapped it in a self-executing function expression
          // (of which the self-executing function expression is needed
          // for 'react-live')
          const parentParent = expr.parent?.parent;
          if (parentParent && isSourceFile(parentParent)) {
            // For assistance with debugging...
            // console.log('Found a top-level JSX element', expr.getText());

            // Replace the ExpressionStatement with a ReturnStatement
            return context.factory.createReturnStatement(expr);
          }
        }
      }
      return visitEachChild(node, visit, context);
    };

    return node => visitNode(node, visit);
  };
}
