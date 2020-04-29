const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin (record) {
  const winCheck = record.find(function(year) {
    if (year.result === "W") {
      return year;
    } 
  });
  if (winCheck) {
    return winCheck.year;
  } else {
    return winCheck;
  }
}
