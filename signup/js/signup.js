function check_sign(event) {
  alert("가입 단추 눌림");
  let userId = document.querySelector("#user_id");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirm = document.querySelector("#confirm");
  let path = document.querySelector("#path");
  let memo = document.querySelector("#memo");
  let mail = document.getElementById("mail");
  let bus = document.getElementById("bus");
  let metro = document.getElementById("metro");
  let walking = document.getElementById("walking");

  // 버스가 체크 되었는지 확인
  if (bus.checked) {
    bus.value = "OK";
  } else {
    bus.value = "NO";
  }
  if (metro.checked) {
    metro.value = "OK";
  } else {
    metro.value = "NO";
  }
  if (walking.checked) {
    walking.value = "OK";
  } else {
    walking.value = "NO";
  }
  // 이메일 수신 여부 확인
  let mailReceive = " ";
  mail.forEach((element) => {
    if (x.value == "yes") {
      mailReceive = "메일수신";
    } else {
      mailReceive = "메일수신 안함";
    }
  });
  let idLength = userId.value.length;
  if (idLength < 4 || idLength > 10) {
    alert("아이디는 4자~10자 사이입니다.");
    userId.focus();
  }

  let result = " ";
  result = result + " 아이디 : " + userId.value + "\n";
  result = result + " 이메일 : " + email.value + "\n";
  result = result + " 비밀번호 : " + password.value + "\n";
  result = result + " 가입경로 : " + memo.value + "\n";
  result = result + " 메일수신 : " + mailReceive.value + "\n";
  result = result + " 버스 : " + bus.value + "\n";
  result = result + " 지하철 : " + metro.value + "\n";
  result = result + " 도보 : " + walking.value + "\n";
  console.log(bus.value);
  console.log(userId.value);
  console.log(email.value);
}
