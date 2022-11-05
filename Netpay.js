const Grosepay = document.getElementById('GrosePay')
const Netpay = document.getElementById('Netpayresualt')
const Netpaytogross = document.getElementById('Netpaytogross')
const grosspayByNet = document.getElementById('grosspayByNet')

//Calculate GrossPay

const Grosepayclac = () => {

    let Gross = Number(Grosepay.value);
    console.log (Gross)
    let Tenpers = Gross*10/100
    let fivetenpers = Gross  *15/100
    let towentypers = Gross*20/100
    let towfivepers = Gross*25/100
    let thertypers = Gross*30/100
    let thertyfivepers = Gross*35/100
    pension = Gross*7/100
// 10%
   if(Gross >=601 && Gross <=1650 ){

    total = Gross - Tenpers - pension + 60

     return Netpay.innerText = `NetPay = $ ${total.toFixed(2)}`
    
   } //15%
   else if(Gross >=1651 && Gross <=3200 ){

      totaltwo = Gross - fivetenpers - pension + 142

      return Netpay.innerText = `NetPay = $ ${totaltwo.toFixed(2)}`

   } //20%
   else if(Gross >=3201 && Gross <=5251 ){

    totalfour = Gross - towentypers - pension + 302

    return Netpay.innerText = `NetPay = $${Math.floor(totalfour)}`

 } //25%
   else if(Gross >=5251 && Gross <=7800 ){

    totalfive = Gross - towfivepers - pension + 565
    return Netpay.innerText = `NetPay = $ ${totalfive.toFixed(2)}`

 } //30%
 else if(Gross >=7801 && Gross <=10900 ){

    totalsix = Gross - thertypers - pension + 955
    return Netpay.innerText = `NetPay = $${totalsix.toFixed(2)}`

 } //35%
  else if(Gross >= 10901 ){

    totalsix = Gross - thertyfivepers - pension + 1500
    return Netpay.innerText = `NetPay = $ ${totalsix.toFixed(2)}`

 }else{
    return Netpay.innerText = `NetPay = $ 0.00 ` 
 }


}

//NetPay Caluclater

const Netpayclac = () => {

   let NetpayGiven = Number(Netpaytogross .value);
 
    console.log (NetpayGiven)

   let NetTenpers = NetpayGiven - 60 
   let Netfivetenpers = NetpayGiven - 142
   let Nettowentypers = NetpayGiven - 302
   let Nettowfivepers = NetpayGiven - 565
   let Netthertypers = NetpayGiven - 955
   let Netthertyfivepers = NetpayGiven - 1500
  
// 10%
  if(NetpayGiven >= 558 && NetpayGiven <=1429.5 ){

   Nettotal = NetTenpers /0.83


    return grosspayByNet.innerText = `GrossPay= $ ${Nettotal.toFixed(2)}`
  } //15%
  else if(NetpayGiven >=1429 && NetpayGiven <=2638){
 
   NetFivetotal = Netfivetenpers /0.78

   return grosspayByNet.innerText = `GrossPay= $ ${NetFivetotal.toFixed(2)}  ` 

  }//20%
  else if(NetpayGiven >=2638 && NetpayGiven <=4135){
 
   Nettowentytotal = Nettowentypers  /0.73

   return grosspayByNet.innerText = `GrossPay= $ ${Nettowentytotal.toFixed(2)}  ` 
  }//25%
  else if(NetpayGiven >=4136 && NetpayGiven <= 5869){
 
   Nettowentyfivetotal = Nettowfivepers / 0.67

   return grosspayByNet.innerText = `GrossPay= $ ${Nettowentyfivetotal .toFixed(2)}  ` 
  } //30%
   else if(NetpayGiven >=5869 && NetpayGiven <= 7822){
 
   Nettheertitotal = Netthertypers / 0.63

   return grosspayByNet.innerText = `GrossPay= $ ${ Nettheertitotal.toFixed(2) }  ` 
  }//35%
   else if(NetpayGiven >= 7823){
 
   Nettheertifivetotal = Netthertyfivepers / 0.58

   return grosspayByNet.innerText = `GrossPay= $ ${Nettheertifivetotal.toFixed(2)  }  ` 
  }
else{
  return grosspayByNet.innerText = `GrossPay = $  0.00 ` 
}

     
}

//Dispaly None

// const Displaynone = () =>{

//    let Dispaly = '$ 0.00'

//   return grosspayByNet.innerText = Dispaly;
// }