const msgOpt = {
  body: '你今天还有需要完成的任务哦！',
  icon: 'http://img.aitter.cn/avatar100.jpg'
}

// 是否允许显示桌面通知
function requestNoti() {
  return new Promise((resolve, reject) => {
    if (Notification.permission === 'granted') {
      resolve()
    } else {
      Notification.requestPermission(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
        if (status === 'granted') {
          resolve()
        } else {
          reject(new Error('user denied'));
        }
      });
    }
  })
}

// 显示通知
function showNoti(msgObj) {
  return new Promise((resolve, reject) => {
    var n = new Notification('通知', msgObj)

    // 3s钟之内，无论是用户点击还是超时未点击关闭，都将关闭通知
    Promise.timeout(closeNoti(), 3000).always(() => {
      n.close();
      resolve();
    })

    // 如果打开失败 reject 触发rejected回调
    n.addEventListener('error', reject)

    function closeNoti() {
      return new Promise(rs => {
        n.addEventListener('click', rs)
        n.addEventListener('close', rs)
      })
    }
  })
}

// 开始
requestNoti()
  .then(() => {
    console.log('显示 桌面通知')
    return showNoti(msgOpt)
  })
  .catch(() => {
    console.log('中断 不允许显示桌面通知')
    return Promise.stop();
  })
  .then(() => {
    console.log('关闭 桌面通知')
  })
  .catch(err => {
    console.log('失败 桌面通知打开失败')
  })