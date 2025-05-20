import { Router, Request, Response } from 'express';
import Pet from '../models/Pet';

const router = Router();

router.get('/pets', async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const filter = name ? { name: { $regex: name, $options: 'i' } } : {};
    const pets = await Pet.find(filter);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ msg: 'Error en servidor' });
  }
});

export default router;
