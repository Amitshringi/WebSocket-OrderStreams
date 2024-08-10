const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

const orders = new Set();

ws.on('message', message => {
    const update = JSON.parse(message);
    const { AppOrderID, priceType, status } = update;

    // Filtering duplicates
    if (orders.has(AppOrderID)) {
        console.log(`Duplicate update filtered: AppOrderID ${AppOrderID}`);
        return;
    }
    orders.add(AppOrderID);

    // Determine action based on order details (mock logic)
    let action;
    if (priceType === 'MKT' && status === 'complete') {
        action = 'placeOrder';
    } else if (priceType === 'LMT' && status === 'open') {
        action = 'placeOrder';
    } else if (priceType === 'SL-LMT' || priceType === 'SL-MKT') {
        action = 'modifyOrder';
    } else if (status === 'cancelled') {
        action = 'cancelOrder';
    }

    if (action) {
        console.log(`Action taken: ${action} for AppOrderID: ${AppOrderID}`);
    } else {
        console.log(`No action required for AppOrderID: ${AppOrderID}`);
    }
});

ws.on('open', () => {
    console.log('Connected to WebSocket server.');
});

ws.on('close', () => {
    console.log('Disconnected from WebSocket server.');
});

ws.on('error', error => {
    console.error(`WebSocket error: ${error}`);
});
