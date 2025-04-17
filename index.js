// เรียกใช้ API ผ่านการ require
var truemoney = require('./apis/truewallet');

// ตัวอย่างการส่งข้อมูลตรวจสอบไปให้ api
truewallet.redeemvouchers('เบอร์ที่ต้องการให้รับอั่งเปา', 'โค้ด/ลิงก์')
        .then(res => {
                console.log(res); // ส่งกลับมาเป็น JSON
        });

// ตัวอย่าง response ตอบกลับ
// { status: 'SUCCESS', amount: จำนวนเงิน } ถ้าสำเร็จ
// { status: 'FAILED', reason: เหตุผลที่ไม่สำเร็จ } ถ้าไม่สำเร็จ