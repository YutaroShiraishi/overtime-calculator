function calc(){

let mode = document.getElementById("mode").value;
let h = Number(document.getElementById("hourly").value);
let o = Number(document.getElementById("overtime").value);
let n = Number(document.getElementById("night").value);
let d = Number(document.getElementById("holiday").value);

if(!h){
 document.getElementById("result").innerHTML = "時給を入力してください";
 return;
}

let resultText = "";

if(mode === "employee"){
 let overtimePremium = h * 0.25 * o;
 let nightPremium = h * 0.5 * n;
 let holidayPremium = h * 0.35 * d;
 let totalPremium = overtimePremium + nightPremium + holidayPremium;

 resultText =
 `
 時間外割増分：${Math.floor(overtimePremium)}円<br>
 深夜割増分：${Math.floor(nightPremium)}円<br>
 休日割増分：${Math.floor(holidayPremium)}円<br>
 <hr>
 <b>割増分 合計：${Math.floor(totalPremium)}円</b>
 `;
}else{
 let overtimePay = h * 1.25 * o;
 let nightPay = h * 1.5 * n;
 let holidayPay = h * 1.35 * d;
 let total = overtimePay + nightPay + holidayPay;

 resultText =
 `
 残業代：${Math.floor(overtimePay)}円<br>
 深夜手当：${Math.floor(nightPay)}円<br>
 休日手当：${Math.floor(holidayPay)}円<br>
 <hr>
 <b>合計：${Math.floor(total)}円</b>
 `;
}

document.getElementById("result").innerHTML = resultText;

}
