export function timeFix() {
  console.log('timeFix');
  const time = new Date();
  const hour = time.getHours();
  return hour < 9
    ? '早上好'
    : hour <= 11
    ? '上午好'
    : hour <= 13
    ? '中午好'
    : hour < 20
    ? '下午好'
    : '晚上好';
}

export function welcome() {
  console.log('welcome');
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要站起来活动一会儿', '我猜你可能累了'];
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
