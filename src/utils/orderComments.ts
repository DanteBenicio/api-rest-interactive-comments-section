export function orderComments(comments: any) {
  return comments.sort((currentComment: any, nextComment: any) => currentComment.score - nextComment.score).reverse()
}