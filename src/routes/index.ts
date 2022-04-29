import Router from 'express'
import { createComment, deleteComment, getComments, updateComment } from '../controllers/comments';
import { getCurrentUser } from '../controllers/currentUser';

const router = Router();

router.get('/comments', getComments);

router.get('/currentUser', getCurrentUser);

router.post('/comments', createComment);

router.put('/comments/:id', updateComment);

router.delete('/comments/:id', deleteComment);

module.exports = router;