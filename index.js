const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

const exampleUpdates = [
    { "AppOrderID": 1111075001, "price": 2, "triggerPrice": 4, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:01", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075002, "price": 3, "triggerPrice": 5, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:02", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075003, "price": 4, "triggerPrice": 6, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:03", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075004, "price": 5, "triggerPrice": 7, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:04", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075005, "price": 6, "triggerPrice": 8, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:05", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075006, "price": 7, "triggerPrice": 9, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:06", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075007, "price": 8, "triggerPrice": 10, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:07", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075008, "price": 9, "triggerPrice": 11, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:08", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "INTC" },
    { "AppOrderID": 1111075009, "price": 10, "triggerPrice": 12, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:09", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "CSCO" },
    { "AppOrderID": 1111075010, "price": 11, "triggerPrice": 13, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:10", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AMD" },
    { "AppOrderID": 1111075011, "price": 12, "triggerPrice": 14, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:11", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "BABA" },
    { "AppOrderID": 1111075012, "price": 13, "triggerPrice": 15, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:12", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "UBER" },
    { "AppOrderID": 1111075013, "price": 14, "triggerPrice": 16, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 2, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:13", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "LYFT" },
    { "AppOrderID": 1111075014, "price": 15, "triggerPrice": 17, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:14", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "SHOP" },
    { "AppOrderID": 1111075015, "price": 16, "triggerPrice": 18, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:15", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "SBUX" },
    { "AppOrderID": 1111075016, "price": 17, "triggerPrice": 19, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:16", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075017, "price": 18, "triggerPrice": 20, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:17", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "TWTR" },
    { "AppOrderID": 1111075018, "price": 19, "triggerPrice": 21, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:18", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075019, "price": 20, "triggerPrice": 22, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:19", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075020, "price": 21, "triggerPrice": 23, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:20", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075021, "price": 22, "triggerPrice": 24, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:21", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075022, "price": 23, "triggerPrice": 25, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:22", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075023, "price": 24, "triggerPrice": 26, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:23", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075024, "price": 25, "triggerPrice": 27, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:24", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075025, "price": 26, "triggerPrice": 28, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:25", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075026, "price": 27, "triggerPrice": 29, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:26", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075027, "price": 28, "triggerPrice": 30, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:27", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075028, "price": 29, "triggerPrice": 31, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:28", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075029, "price": 30, "triggerPrice": 32, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:29", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075030, "price": 31, "triggerPrice": 33, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:30", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075031, "price": 32, "triggerPrice": 34, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:31", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075032, "price": 33, "triggerPrice": 35, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:32", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075033, "price": 34, "triggerPrice": 36, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 2, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:33", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075034, "price": 35, "triggerPrice": 37, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:34", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075035, "price": 36, "triggerPrice": 38, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:35", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075036, "price": 37, "triggerPrice": 39, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:36", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075037, "price": 38, "triggerPrice": 40, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:37", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075038, "price": 39, "triggerPrice": 41, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:38", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075039, "price": 40, "triggerPrice": 42, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 2, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:39", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075040, "price": 41, "triggerPrice": 43, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:40", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075041, "price": 42, "triggerPrice": 44, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:41", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075042, "price": 43, "triggerPrice": 45, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:42", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075043, "price": 44, "triggerPrice": 46, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:43", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075044, "price": 45, "triggerPrice": 47, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:44", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075045, "price": 46, "triggerPrice": 48, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:45", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075046, "price": 47, "triggerPrice": 49, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:46", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075047, "price": 48, "triggerPrice": 50, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:47", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075048, "price": 49, "triggerPrice": 51, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:48", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075049, "price": 50, "triggerPrice": 52, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:49", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075050, "price": 51, "triggerPrice": 53, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:50", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075051, "price": 52, "triggerPrice": 54, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:51", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075052, "price": 53, "triggerPrice": 55, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:52", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075053, "price": 54, "triggerPrice": 56, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:53", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "FB" },
    { "AppOrderID": 1111075054, "price": 55, "triggerPrice": 57, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 2, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:54", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "AAPL" },
    { "AppOrderID": 1111075055, "price": 56, "triggerPrice": 58, "priceType": "MKT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 3, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:55", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "GOOGL" },
    { "AppOrderID": 1111075056, "price": 57, "triggerPrice": 59, "priceType": "LMT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:56", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "AMZN" },
    { "AppOrderID": 1111075057, "price": 58, "triggerPrice": 60, "priceType": "MKT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 0, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:57", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "MSFT" },
    { "AppOrderID": 1111075058, "price": 59, "triggerPrice": 61, "priceType": "LMT", "productType": "I", "status": "open", "CumulativeQuantity": 0, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:58", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "TSLA" },
    { "AppOrderID": 1111075059, "price": 60, "triggerPrice": 62, "priceType": "MKT", "productType": "I", "status": "cancelled", "CumulativeQuantity": 0, "LeavesQuantity": 2, "OrderGeneratedDateTimeAPI": "23-07-2024 10:16:59", "transaction": "sell", "AlgoID": "", "exchange": "NSE", "symbol": "NFLX" },
    { "AppOrderID": 1111075060, "price": 61, "triggerPrice": 63, "priceType": "LMT", "productType": "I", "status": "complete", "CumulativeQuantity": 1, "LeavesQuantity": 1, "OrderGeneratedDateTimeAPI": "23-07-2024 10:17:00", "transaction": "buy", "AlgoID": "", "exchange": "NSE", "symbol": "FB" }
]

//send Updates
const sendUpdates = (ws, updates, delay) => {
    setTimeout(() => {
        updates.forEach(update => {
            const timeSent = new Date().toISOString();
            console.log(`Sending update: ${JSON.stringify(update)} at ${timeSent}`);
            ws.send(JSON.stringify({ ...update, timeSent }));
        });
    }, delay);
};

//server connection to client
server.on('connection', ws => {
    console.log('Client connected.');

    // Send batches of updates with specified delays
    const firstBatch = exampleUpdates.slice(0, 10);
    const secondBatch = exampleUpdates.slice(10, 30);
    const thirdBatch = exampleUpdates.slice(30, 70);
    const fourthBatch = exampleUpdates.slice(70, 100);

    sendUpdates(ws, firstBatch, 1000); // First batch after 1 second

    setTimeout(() => {
        sendUpdates(ws, secondBatch, 0); // Second batch after 2 seconds (1 second + 1 second delay)
    }, 2000);

    setTimeout(() => {
        sendUpdates(ws, thirdBatch, 0); // Third batch after 3 seconds (2 seconds + 1 second delay)
    }, 3000);

    setTimeout(() => {
        sendUpdates(ws, fourthBatch, 0); // Final batch after 5 seconds (3 seconds + 2 seconds delay)
    }, 5000);
});

server.on('close', () => {
    console.log('Client disconnected.');
});

console.log('WebSocket server is running on ws://localhost:8080');
