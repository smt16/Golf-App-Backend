import { Request, Response } from 'express';

export function verifyToken(req: Request, res: Response) {
  console.log(req.path);
  console.log(res.send('wassup'));
}
