//戻り値
const half = (number) => {
  // numberを2で割った値を戻り値として返してください
  return number/2;
};

// 定数resultを定義してください
const result=half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);

//戻り値の活用
const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number %3 === 0;

};

// if文の条件式で、checkを呼び出してください
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}