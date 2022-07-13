/**
 * Bài 1
 * INPUT: Nhập tổng thu nhập năm, số người phụ thuộc
 * FROCESS:
 *          - Lấy dữ liệu tổng thu nhập và số người phụ thuộc
 *          - Tính thu nhập chịu thuế = tổng thu nhập - 4 - số người phụ thuộc*1600000
 *          - Tính thuế phải đóng:
 *              + nếu thu nhập cá nhân <= 60000000:
 *                  Thuế phải đóng = (thu nhập chịu thuế*5)/100
 *              + Nếu thu nhập chịu thuế > 60000000 và thu nhập chịu thuế <= 120000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*10)/100
 *              + Nếu thu nhập chịu thuế > 120000000 và thu nhập chịu thuế <= 210000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*15)/100
 *              + Nếu thu nhập chịu thuế > 210000000 và thu nhập chịu thuế <= 384000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*20)/100
 *              + Nếu thu nhập chịu thuế > 384000000 và thu nhập chịu thuế <= 624000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*25)/100
 *              + Nếu thu nhập chịu thuế > 624000000 và thu nhập chịu thuế <= 960000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*30)/100
 *              + Nếu thu nhập chịu thuế > 960000000
 *                  Thuế phải đóng = (thu nhập chịu thuế*35)/100
 *          - Log ra số tiền thuế phải đóng
 * OUTPUT: Thuế phải đóng là
 */

function caculTaxableIcome(income,member){
    // var member = 5;
    var taxableIcome = income - 4000000 - member*1600000;
    return taxableIcome;
}
function caculIcomeTax(){
    var icome = caculTaxableIcome(1000000000,3);
    var icomeTax = 0;
    if(icome <= 60000000){
        icomeTax = (icome*5)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else if(icome > 60000000 && icome <= 120000000){
        icomeTax =(icome*10)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else if(icome > 120000000 && icome <= 210000000){
        icomeTax =(icome*15)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else if(icome > 210000000 && icome <= 384000000){
        icomeTax =(icome*20)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else if(icome > 384000000 && icome <= 624000000){
        icomeTax =(icome*25)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else if(icome > 624000000 && icome <= 960000000){
        icomeTax =(icome*30)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    } else{
        icomeTax =(icome*35)/100;
        console.log("Thuế phải đóng là:", icomeTax)
    }
}
caculIcomeTax()





/**
 * Bài 2
 * INPUT:
 *      - Nhâp loại khách hàng, số cổng kết nối(đối với khách hàng doanh nghiệp), số kênh thuê cao cấp
 *      - Tính hóa đơn cần phải thanh toán = phí xử lý hóa đơn + phí dịch vụ cơ bản + phí thuê kênh cao cấp(đối với khách hàng doanh nghiệp, nếu số cổng kết nối > 10 thì phí dịch vụ cơ bản = 75+ (số cổng két nối -10)*5)
 *      Log ra hóa đơn dịch vụ
 * OUTPUT: Hóa đơn dịch vụ:
 * 
 */


function payInternetH(chanels){
    var feehandle = 4.5;
    var feeService = 20.5;
    var premiumChanel = 7.5;
    var premiumChanels = 0;

    premiumChanels = premiumChanel*chanels;

    var totalBill = feehandle + feeService + premiumChanels

    console.log("Hóa đơn dịch vụ:", totalBill)

    return totalBill
    
}


function payInternetB(conector, chanels){
    var feehandle = 15;
    var feeService = 75;
    var service = 0;
    var premiumChanel = 50;
    var premiumChanels = 0;

    if(conector > 10){
        service = feeService + (conector - 10)*5;
    } else{
        service = feeService;
    }
    premiumChanels = premiumChanel*chanels;

    var totalBill = feehandle + service + premiumChanels;

    // console.log(service)

    console.log("Hóa đơn dịch vụ:", totalBill);
    
    return totalBill;


}



function internetPay(customName){
    if(customName === "houseHold"){
        payInternetH(5);
        return payInternetH
    }
    if(customName === "business"){
        payInternetB(15, 5);
        return payInternetB
    }
}

internetPay("business")