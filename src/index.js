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

const nameArr = ["田中", "山田", "ちゃーりー"];
//  for (let index = 0; index < nameArr.length; index ++) {
//   // console.log(nameArr[index]);
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
//  }

//  const nameArr2 = nameArr.map((name) => {
//    return name;
//  })
//  console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// //filter example 配列に対してある条件に一致したものだけ取り出す
// const numArr = [1,2,3,4,5];
// const newNumArr =numArr.filter((num) => {
//   return num % 2 === 0;　// %:割り算の余りを出す
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "ちゃーりー") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
