import { Router, Request, Response } from 'express';
import { getExchangeRates } from '../../dataService/xmlParser';

const router = Router();

router.get('/',async (req: Request, res: Response) => {
  try {
    const exchangeRates = await getExchangeRates();
    res.json({message:exchangeRates});
  } catch (error) {
    console.log(error);
    res.status(500).send('Erreur lors de la récupération des taux de change');
  }
});

  export default router;
