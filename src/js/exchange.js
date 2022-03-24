export default class ExchangeService {  
  static async getExhchange(currencyType) {
    try {
      let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${currencyType}`;
      const response = await fetch (url);
      console.log(response);
      if (!response.ok){
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}