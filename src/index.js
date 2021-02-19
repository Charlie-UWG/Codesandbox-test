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

// /**
//  * テンプレート文字列
//  */
// const name = "ちゃーりー";
// const age = 58;
// // 「私の名前はちゃーりーです。年齢は５８です。」
// //従来の方法は
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// // テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /**
//  * デフォルト値・引数など
//  */
// // const sayHello = (name) => console.log(`こんにちは！${name}さん！`);
// // sayHello("ちゃーりー"); //引数を入力するとOKだが、無入力の場合
// // undefinedの表示を回避するために初期値を設定する
// const sayHello = (name= "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1); //配列の中身を順番に展開して出力してくれる

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; //分割代入の構文
console.log(num1);
console.log(num2);
console.log(arr3);
