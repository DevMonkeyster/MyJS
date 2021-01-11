

const body = {
    "nickname" : "蛋壳我是你父亲啊哈哈哈",
    "timestamp" : "1610351312"
}
console.log(body);

const bodydic = $request.body;
bodydic["nickname"] = "我是蛋壳的亲爹";



console.log($request.body);


