/**
 * 変数 const let
 */
// let val1 = "変数１です";
// console.log(val1);

// val1 = "変数1は変更できます";
// console.log(val1);

// const val2 = "変数２";
// console.log(val2);

// // オブジェクトのプロパティは変更可能
// const val3 = {
//   name: "charlie",
//   age: 58
// };

// val3.name = "Charlie";

// console.log(val3);

/**
 * テンプレート文字列
 */
const name = "ちゃーりー";
const age = 58;
//従来の方法は
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列を用いると
const message2 = `私の名前は ${name}です。年齢は ${age}です。`;
console.log(message2);
