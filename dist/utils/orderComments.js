"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderComments = void 0;
function orderComments(comments) {
    const rootCommentsOrderned = comments.sort((currentComment, nextComment) => currentComment.score - nextComment.score).reverse();
    const allCommentsOrderned = rootCommentsOrderned.map((comment) => {
        if (comment.replies.length) {
            return Object.assign(Object.assign({}, comment), { replies: comment.replies.sort((a, b) => a.score - b.score).reverse() });
        }
        return Object.assign({}, comment);
    });
    return allCommentsOrderned;
}
exports.orderComments = orderComments;
