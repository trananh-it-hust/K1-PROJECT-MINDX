function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

const gmail = document.getElementById("n_gmail");
const mk = document.getElementById("n_mk");
const btn_dn = document.getElementById("btn_dn");
const tb = document.getElementById("tb");
const gm_tb = document.getElementById("gmail_tb");

btn_dn.addEventListener("click", () => {
  tb.innerText = "";
  gm_tb.innerText = "";
  if (mk.value == "" || gmail.value == "") {
    tb.innerText = "Nhập đầy đủ thông tin";
    return;
  }
  if (!ValidateEmail(gmail.value)) {
    gm_tb.innerText = "Nhập sai định dạng gmail";
    return;
  }
});
