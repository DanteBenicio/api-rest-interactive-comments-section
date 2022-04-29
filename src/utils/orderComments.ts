export function orderComments(comments: any) {
  const rootCommentsOrderned = comments.sort((currentComment: any, nextComment: any) => currentComment.score - nextComment.score).reverse()
  const allCommentsOrderned = rootCommentsOrderned.map((comment: any) => {
    if (comment.replies.length) {
      return { ...comment, replies: comment.replies.sort((a:any, b:any) => a.score - b.score).reverse() }
    }

    return {...comment}
  })

  return allCommentsOrderned
}