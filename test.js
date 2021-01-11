
console.log($request.body);

const bodydic = $request.body;
bodydic["nickname"] = "我是蛋壳的亲爹";

$request.body = bodydic;

console.log($request.body);


