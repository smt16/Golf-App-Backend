import { Request, Response } from 'express';
import { verifyToken } from './contorllers/token.controller';

export default async function AuthRouter(req: Request, res: Response) {
  switch (req.path) {
    case '/auth/verifyToken':
      return verifyToken(req, res);

    default:
      // incorrect API endpoint
      res.status(404).send('Route not found');
  }
}
