console.log("전역 실행 컨텍스트입니다.");

function context1() {
  console.log("Context1 살행 컨텍스트입니다.");
}

function context2() {
  context1();
  console.log("Context2 살행 컨텍스트입니다.");
}

context2();
