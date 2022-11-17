let order = [
    {
        "Customer": "Mr.lee",
        "ItemOrder": ["A4 Paper", "Ruler"],
        "Qty": [5, 2],
        "Price": [120, 25]
    },
    {
        "Customer": "Mr.Yue",
        "ItemOrder": ["Flash Drive", "A4 Paper"],
        "Qty": [2, 3],
        "Price": [130, 120]
    },
    {
        "Customer": "Mr.Nice",
        "ItemOrder": ["Flash Drive", "A4 Paper", "Ruler"],
        "Qty": [2, 3, 1],
        "Price": [130, 120, 25]
    }
]
for (let i = 0; i < order.length; i++) {

    let sum = 0;
    for (let j = 0; j < order[i].ItemOrder.length; j++) {
        sum += order[i].Price[j] * order[i].Qty[j];
    }
    console.log(order[i].Customer, sum);
}