const fetch = require('axios');
const tls = require("tls");

tls.DEFAULT_MIN_VERSION = "TLSv1.3";

module.exports = {
        redeemvouchers: async function (phone_number, voucher_code) {
                voucher_code = voucher_code.replace('https://gift.truemoney.com/campaign/?v=', '');

                if (!/^[a-z0-9]*$/i.test(voucher_code)) {
                        return {
                                status: 'FAIL',
                                reason: 'Voucher ต้องประกอบด้วยตัวอักษรอังกฤษหรือตัวเลขเท่านั้น'
                        };
                }

                if (voucher_code.length <= 0) {
                        return {
                                status: 'FAIL',
                                reason: 'Voucher code ห้ามเว้นว่าง'
                        };
                }

                const data = {
                        mobile: `${phone_number}`,
                        voucher_hash: `${voucher_code}`
                };

                try {
                        const response = await fetch(`https://gift.truemoney.com/campaign/vouchers/${voucher_code}/redeem`, {
                                method: 'post',
                                data: JSON.stringify(data),
                                headers: {
                                        'Content-Type': 'application/json',
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // ปลอมตัวเป็น browser
                                        'Origin': 'https://gift.truemoney.com',
                                        'Referer': `https://gift.truemoney.com/campaign/?v=${voucher_code}`
                                }
                        });

                        const resjson = response?.data;

                        if (resjson?.status?.code === 'SUCCESS') {
                                return {
                                        status: 'SUCCESS',
                                        amount: parseInt(resjson.data.voucher.redeemed_amount_baht)
                                };
                        } else {
                                return {
                                        status: 'FAILED',
                                        reason: resjson?.status?.message || 'ไม่สามารถใช้งานโค้ดนี้ได้'
                                };
                        }
                } catch (err) {
                        console.error('❌ Error calling TrueMoney API:', err.message);
                        return {
                                status: 'ERROR',
                                // reason: 'เกิดข้อผิดพลาดระหว่างติดต่อ API'
                        };
                }

        }
};