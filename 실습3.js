const choices = ["가위", "바위", "보"];
const userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요:");

if (!choices.includes(userChoice)) {
    console.log(
        "올바른 입력이 아닙니다. '가위', '바위', '보' 중 하나를 입력하세요."
    );
} else {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`사용자: ${userChoice}`);
    console.log(`컴퓨터: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("무승부!");
    } else if (
        (userChoice === "가위" && computerChoice === "보") ||
        (userChoice === "바위" && computerChoice === "가위") ||
        (userChoice === "보" && computerChoice === "바위")
    ) {
        console.log("사용자가 이겼습니다!");
    } else {
        console.log("컴퓨터가 이겼습니다!");
    }
}
