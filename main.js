// وقتی که پرداخت تایید میشه
let salesCount = parseInt(localStorage.getItem('salesCount') || '0');
let totalIncome = parseInt(localStorage.getItem('totalIncome') || '0');

// به‌روزرسانی تعداد فروش‌ها و درآمد
salesCount++;
totalIncome += 5000000; // برای مثال مبلغ پرداختی 5 میلیون تومان

// ذخیره در localStorage
localStorage.setItem('salesCount', salesCount);
localStorage.setItem('totalIncome', totalIncome);

console.log(`تعداد فروش: ${salesCount}`);
console.log(`درآمد کل: ${totalIncome} تومان`);
