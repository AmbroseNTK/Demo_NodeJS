module.exports = {
    // Hàm kiểm tra số nguyên tố
    ktsnt: function (n) {
        // Biến cờ hiệu
        var flag = true;

        // Nếu n bé hơn 2 tức là không phải số nguyên tố
        if (n < 2) {
            flag = false;
        }
        else if (n == 2) {
            flag = true;
        }
        else if (n % 2 == 0) {
            flag = false;
        }
        else {
            // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
            for (var i = 3; i < n - 1; i += 2) {
                if (n % i == 0) {
                    flag = false;
                    break;
                }
            }
        }

        return flag;
    }
}