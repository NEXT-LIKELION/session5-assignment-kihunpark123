const treeHeight = 5;
let i = 0;

while (i < treeHeight) {
    let stars = " ".repeat(treeHeight - i - 1) + "*".repeat(2 * i + 1);
    console.log(stars);
    i++;
}
