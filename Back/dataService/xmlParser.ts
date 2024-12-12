import { readFileSync } from 'fs';
import { parseStringPromise } from 'xml2js';

const currencySymbols: { [key: string]: string } = {
  USD: 'Us$',
  JPY: '¥',
  BGN: 'Lev',
  CZK: 'Kč',
  DKK: 'Kr',
  GBP: '£',
  HUF: 'Ft',
  PLN: 'zł',
  RON: 'Leu',
  SEK: 'Kr',
  CHF: 'Fr',
  ISK: 'Kr',
  NOK: 'Kr',
  TRY: '₺',
  AUD: 'A$',
  BRL: 'R$',
  CAD: 'C$',
  CNY: '¥',
  HKD: 'HK$',
  IDR: 'Rp',
  INR: '₹',
  KRW: '₩',
  MXN: 'Mex$',
  MYR: 'RM',
  NZD: 'NZ$',
  PHP: '₱',
  SGD: 'S$',
  THB: '฿',
  ZAR: 'R',
};

export async function getExchangeRates() {
  try {
    const xmlData = readFileSync('eurofxref-daily.xml', 'utf-8');
    const result = await parseStringPromise(xmlData);

    // Accéder à la liste des taux de change
    const rates = result['gesmes:Envelope']['Cube'][0]['Cube'][0]['Cube'];

    // Récupérer chaque taux de change et associer le symbole
    const exchangeRates = rates.map((rate: any) => {
      const currency = rate['$'].currency;
      const rateValue = rate['$'].rate;
      return {
        currency: currency,
        value: rateValue,
        symbol: currencySymbols[currency] || '€',  // Si pas de symbole trouvé, mettre €
      };
    });
    console.log('Liste des taux d\'échange avec symboles :', exchangeRates);
    return exchangeRates;
  } catch (error) {
    console.error('Erreur lors du parsing XML :', error);
    throw new Error('Erreur lors du traitement des données XML');
  }
}

getExchangeRates();
