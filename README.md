Phân tích nguyên nhân kỹ thuật:
Nguyên nhân: Các biến dữ liệu đầu vào rawFoodPrice, rawToppingPrice, và rawDeliveryFee được khởi tạo dưới dạng chuỗi ký tự (String), ví dụ như "55000".

Hành vi của toán tử +: Khi toán tử + thao tác với dữ liệu dạng chuỗi, JavaScript thực hiện cơ chế nối chuỗi (concatenation) thay vì phép cộng số học (addition). Do đó:

foodTotal = rawFoodPrice + rawToppingPrice thành "55000" + "15000" kết quả là chuỗi "5500015000".

Tiếp tục cộng với rawDeliveryFee và trừ đi voucherDiscount, chuỗi tiếp tục bị nối dài thành "550001500020000".

Giải pháp: Cần sử dụng hàm ép kiểu tường minh như Number() hoặc parseInt() để chuyển đổi các chuỗi thô thành số trước khi thực hiện các phép tính tài chính.