const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// offset转换为标准格式 

function timeform(time) {
  var mini, sec;
  mini = parseInt(time / 60);
  sec = time % 60;
  if(sec<10) sec='0'+sec;
  if (mini< 10) mini='0' + mini
  return (mini + ":" + sec);
}

function timeunix(time) {
  var mini, sec;
  var arr;
  arr = time.split(":"); // 以特定字符来分割字符串,返回为一个数组
  mini = parseInt(arr[0]);
  sec = parseInt(arr[1]);
  return (mini * 60 + sec)
}

function totime(offset, time) {
  var max, ans1;
  max = timeunix(time);
  ans1 = max * offset / 100;
  return timeform(parseInt(ans1));
}

module.exports = {
  formatTime: formatTime,
  totime: totime
}
