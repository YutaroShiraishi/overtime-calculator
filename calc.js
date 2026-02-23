function calc(){

let h = Number(document.getElementById("hourly").value);
let o = Number(document.getElementById("overtime").value);
let n = Number(document.getElementById("night").value);
let d = Number(document.getElementById("holiday").value);

if(!h){
 document.getElementById("result").innerHTML = "時給を入力してください";
 return;
}

let overtimePay = h * 1.25 * o;
let nightPay = h * 1.5 * n;
let holidayPay = h * 1.35 * d;
let total = overtimePay + nightPay + holidayPay;

document.getElementById("result").innerHTML =
`
残業代：${Math.floor(overtimePay)}円<br>
深夜手当：${Math.floor(nightPay)}円<br>
休日手当：${Math.floor(holidayPay)}円<br>
<hr>
<b>合計：${Math.floor(total)}円</b>
`;

}
