import Router, { Request, Response } from 'express'
import { Comments } from '../models/Comments';
import { CurrentUser } from '../models/CurrentUser';
const router = Router();

router.get('/comments', async (req: Request, res: Response) => {
  try {
    const comments = await Comments.find()
    const commentsData = comments.map(comment => {
      const commentContent = {
        id: comment.id,
        content: comment.content,
        createdAt: comment.createdAt,
        score: comment.score,
        user: comment.user,
        replies: comment.replies.map((reply: any) => {
          return {
            id: reply.id, 
            content: reply.content,
            createdAt: reply.createdAt,
            replyingTo: reply.replyingTo,
            score: reply.score,
            user: reply.user,
            you: reply.you
          }
        }),
      }

      return commentContent
    })
    
    return res.status(200).json(commentsData);
  } catch (error) {
    res.status(500).json({error});
  }
})

router.get('/currentUser', async (req: Request, res: Response) => {
  try {
    const [currentUserData] = await CurrentUser.find()
  
    return res.status(200).json(currentUserData);
  } catch (error) {
    res.status(500).json({error});
  }
})

router.post('/comments', async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(422).json({
      error: 'Insira os dados para serem processados!'
    })
    return
  }

  try {
    await Comments.insertMany(req.body)

    res.status(201).json({
      message: 'Comentário inserido sucesso!'
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
})

router.put('/comments/:id', async (req, res) => {
  const {id} = req.params;

  if (!req.body) {
    res.status(422).json({
      error: 'Insira os dados para serem enviados'
    })
    return
  }

  try {
    await Comments.updateOne({id: id}, req.body);

    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({
      error
    })
  }
});

router.delete('/comments/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const response = await Comments.deleteOne({id: id});

    if (response.deletedCount === 0) {
      res.status(422).json({
        message: 'Comentário não encontrado!'
      })
      return
    }

    res.status(200).json({
      message: 'Deletado com sucesso!'
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
})

module.exports = router;