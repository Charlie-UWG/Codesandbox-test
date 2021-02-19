/**
 * const let などの変数宣言
 */
var val1 = "var変数";
console.log(val1);
// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);
// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// let val2 = "let変数";
// console.log(val1);
// let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // オブジェクトのプロパティは変更可能
// const val4 = {
//   name: "charlie",
//   age: 58
// };

// val4.name = "Charlie";

// console.log(val4);

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

// /**
//  * スプレッド構文
//  */
// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列の中身を順番に展開して出力してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入の構文
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30, 40];
// //arr4のデータをコピーし、arr6とする
// const arr6 = [...arr4];
// // console.log(arr6);
// //arr4 arr5のデータを結合してarr7とする
// const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// //コピーするのに、＝ではダメなのか？
// const arr8 = arr4;
// console.log(arr8);
// //同じデータになっているが・・・
// //データを変更した場合に不具合が起こりうる
// arr8[0] = 100;
// console.log(arr8); //ちゃんと変更できているが、
// console.log(arr4);
// //スプレッド構文を使用した場合は参照元のデータは変化しない

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "ちゃーりー"];
//  for (let index = 0; index < nameArr.length; index ++) {
//   // console.log(nameArr[index]);
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
//  }

//  const nameArr2 = nameArr.map((name) => {
//    return name;
//  })
//  console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// //filter example 配列に対してある条件に一致したものだけ取り出す
// const numArr = [1,2,3,4,5];
// const newNumArr =numArr.filter((num) => {
//   return num % 2 === 0;　// %:割り算の余りを出す
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ちゃーりー") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？条件がtrueの時：条件がfalseの時
// const val1 = 1 <0 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '範囲を超えています' : '許容範囲です';
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子のほんとうの意味を知ろう　&& ||
 */
//

// ||は左側がfalseとなる時ならば右を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
