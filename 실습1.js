const level = ["A", "B", "C"];
let userInput = prompt("회원 등급을 입력해주세요 (A, B, C 등급)");
if (userInput == "A") {
    console.log("A, B, C 등급의 영화를 모두 열람할 수 있습니다.");
} else if (userInput == "B") {
    console.log("B, C 등급의 영화를 열람할 수 있습니다.");
} else if (userInput == "C") {
    console.log("C 등급의 영화만 열람할 수 있습니다.");
} else {
    console.log("유효하지 않은 등급입니다.");
}
