// process.argv
process.argv.forEach(function (item, index) {
  //   출력합니다.
  console.log(index + " : " + typeof item + " : ", item);

  //   실행 매개변수에 --exit가 있을때
  if (item == "--exit") {
    var exitTime = Number(process.argv[index + 1]);

    // 일정 시간후 프로그램을 종료합니다.
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
});
