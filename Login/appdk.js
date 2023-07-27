function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}
function ValidateSDT(inputText) {
  var sdtformat = /^(0[23456789][0-9]{8}|1[89]00[0-9]{4})$/;
  if (inputText.match(sdtformat)) {
    return true;
  } else {
    return false;
  }
}


const tb = document.getElementById("tb");
const btn_dk = document.getElementById("btn_dk");
const ho = document.getElementById("n-ho");
const ten = document.getElementById("n-ten");
const sdt = document.getElementById("n-sdt");
const mail = document.getElementById("n-mail");
const pass = document.getElementById("n-pass");

btn_dk.addEventListener("click", () => {
  tb.innerText = "";
  if (pass.value == "" || mail.value == "" || ho.value == "" || ten.value == "" || sdt.value == "" ) {
    tb.innerText = "Nhập đầy đủ thông tin";
    return;
  }
  if (!ValidateEmail(mail.value)) {
    tb.innerText = "Nhập sai định dạng gmail";
    return;
  }
  if (!ValidateSDT(sdt.value)) {
    tb.innerText = "Nhập sai định dạng số điện thoại";
    return;
  }
  if(tb.innerText == "") window.open("../Login/index_dn.html")
});