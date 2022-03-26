export default class ExchangeService {  
  static async getExchange(currencyType) {
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
  static async getFull() {
    try {
      let url2 = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      const response2 = await fetch (url2);
      console.log("response 2 : "+response2);
      if (!response2.ok){
        throw Error(response2.statusText);
      }
      return response2.json();
    } catch(error) {
      return error.message;
    }
  } 
}