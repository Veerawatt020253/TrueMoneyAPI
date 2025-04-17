# TrueWalletAPIS !

TrueWalletAPIS หรือ API สำหรับรับอั่งเปาโดยอัตโนมัติ โดยโค้ดนี้ถูกดัดแปลงจากของ ต้นฉบับ ([Manybaht] (https://github.com/manybaht/Manybaht-Truewallet-API)) ซึ้งได้ทำการปรับปรุงประสิทธิภาพและทำการเพิ่มระบบที่ช่วยให้ไม่ถูกปิดกั้น โดยทรูมันนี่


# Technology

NodeJS - https://nodejs.org/en

## วิธีการติดตั้ง
``` bash
    git clone https://github.com/Veerawatt020253/TrueMoneyAPI.git
    npm i หริอ bun i (แล้วแต่ Runtime ที่ใช้)
```

## วิธีการใช้งาน
``` javascript
    // เรียกใช้ API ผ่านการ require
    
    var truemoney =  require('./apis/truewallet');
    
    // ตัวอย่างการส่งข้อมูลตรวจสอบไปให้ api
    
    truewallet.redeemvouchers('เบอร์ที่ต้องการให้รับอั่งเปา', 'โค้ด/ลิงก์')
    
    .then(res  => {
    
    console.log(res); // ส่งกลับมาเป็น JSON
    
    });
    
    // ตัวอย่าง response ตอบกลับ
    
    // { status: 'SUCCESS', amount: จำนวนเงิน } ถ้าสำเร็จ
    
    // { status: 'FAILED', reason: เหตุผลที่ไม่สำเร็จ } ถ้าไม่สำเร็จ
   ```

