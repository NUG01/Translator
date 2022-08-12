const text = document.querySelector(".textarea");
const btn = document.querySelector(".translate");
const translated = document.querySelector(".translated");
const tra = document.querySelector(".tra");
const copy = document.querySelector(".copy");

copy.addEventListener("click", function (e) {
  let text = tra.textContent;
  navigator.clipboard.writeText(text);
});

btn.addEventListener("click", function () {
  const newtext = text.value
    .replaceAll("a", "ა")
    .replaceAll("b", "ბ")
    .replaceAll("c", "ც")
    .replaceAll("d", "დ")
    .replaceAll("e", "ე")
    .replaceAll("f", "ფ")
    .replaceAll("g", "გ")
    .replaceAll("h", "ჰ")
    .replaceAll("i", "ი")
    .replaceAll("j", "ჯ")
    .replaceAll("k", "კ")
    .replaceAll("l", "ლ")
    .replaceAll("m", "მ")
    .replaceAll("n", "ნ")
    .replaceAll("o", "ო")
    .replaceAll("p", "პ")
    .replaceAll("q", "ქ")
    .replaceAll("r", "რ")
    .replaceAll("s", "ს")
    .replaceAll("t", "ტ")
    .replaceAll("u", "უ")
    .replaceAll("v", "ვ")
    .replaceAll("w", "წ")
    .replaceAll("x", "ხ")
    .replaceAll("y", "ყ")
    .replaceAll("z", "ზ")
    .replaceAll("A", "ა")
    .replaceAll("B", "ბ")
    .replaceAll("C", "ჩ")
    .replaceAll("D", "დ")
    .replaceAll("E", "ე")
    .replaceAll("F", "ფ")
    .replaceAll("G", "გ")
    .replaceAll("H", "ჰ")
    .replaceAll("I", "ი")
    .replaceAll("J", "ჯ")
    .replaceAll("K", "კ")
    .replaceAll("L", "ლ")
    .replaceAll("M", "მ")
    .replaceAll("N", "ნ")
    .replaceAll("O", "ო")
    .replaceAll("P", "პ")
    .replaceAll("Q", "ქ")
    .replaceAll("R", "ღ")
    .replaceAll("S", "შ")
    .replaceAll("T", "თ")
    .replaceAll("U", "უ")
    .replaceAll("V", "ვ")
    .replaceAll("W", "ჭ")
    .replaceAll("X", "ხ")
    .replaceAll("Y", "ყ")
    .replaceAll("Z", "ძ");
  tra.innerText = newtext;
});
