const customerName = "Nguyen Thi Mai";
const foodItemName = "Com Tam Suon Bi Cha";
const rawFoodPrice = "55000";
const rawToppingPrice = "15000";
const rawDeliveryFee = "20000";
const voucherDiscount = 10000;

const foodPriceNum = Number(rawFoodPrice);
const toppingPriceNum = Number(rawToppingPrice);
const deliveryFeeNum = Number(rawDeliveryFee);

// 1. Tính tổng giá trị món ăn chuẩn xác (Kiểu số)
const foodTotal = foodPriceNum + toppingPriceNum;

// 2. Tính toán tổng số tiền thanh toán cuối cùng chuẩn xác
const finalPayment = foodTotal + deliveryFeeNum - voucherDiscount;

console.log(`Khách hàng: ${customerName}`);
console.log(`Món ăn: ${foodItemName}`);
console.log(`Tổng tiền món ăn: ${foodTotal} VND`);
console.log(`Số tiền thanh toán thực tế: ${finalPayment} VND`);