import WebSocket from 'ws';

export const WebSocketCrypto = () => {
// this is where you paste your api key
   let apiKey = "cc5093a185874c348807b9c1cca8396b8591f9d8826efb4a22c57000db1471c2";
   const ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + apiKey);

   ccStreamer.on('open', function open() {
      var subRequest = {
         "action": "SubAdd",
         "subs": ["5~CCCAGG~BTC~USD"]
      };
      ccStreamer.send(JSON.stringify(subRequest));
   });

   ccStreamer.on('message', function incoming(data) {
      let { PRICE, FROMSYMBOL } = JSON.parse(data);
      console.log(PRICE, FROMSYMBOL);
   });
};
