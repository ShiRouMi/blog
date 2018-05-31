function SetCookie(name, value, time) {
  if (!time) {
    time = 30 * 12 * 24 * 60 * 60 * 1000 // 时间默认设置为1年，time单位毫秒
  }
  let exp = new Date() // 获得当前时间
  exp.setTime(exp.getTime() + time) // 换成毫秒
  if (value && value !== 'undefined') {
    document.cookie = ''
    document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString()
  } else {
    document.cookie = name + '=;path=/;expires=' + (new Date(0)).toGMTString()
  }
}

// 获取sso登录时写入的用户信息
function GetRequest() {
  let url = location.search // 获取url中"?"符后的字串
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  console.log(theRequest)
  return theRequest
}

// 获取cookie的值
function GetCookieValue(name) {
  if (document.cookie) {
    let startIndex = document.cookie.indexOf(name)
    if (startIndex !== -1) {
      startIndex += name.length + 1
      let endIndex = document.cookie.length
      // unescape() 函数可对通过 escape() 编码的字符串进行解码。
      return unescape(document.cookie.substring(startIndex, endIndex)).toString()
    }
  } else {
    return ''
  }
}

function createIframe(dom, src, className, onload) {
  // 在document中创建iframe
  var iframe = document.createElement('iframe')
  // 设置iframe的样式
  iframe.style.display = 'none'
  iframe.className = className
  // 绑定iframe的onload事件
  if (onload && Object.prototype.toString.call(onload) === '[object Function]') {
    if (iframe.attachEvent) {
      iframe.attachEvent('onload', onload)
    } else if (iframe.addEventListener) {
      iframe.addEventListener('load', onload)
    } else {
      iframe.onload = onload
    }
  }

  iframe.src = src
  // 把iframe载入到body以下
  dom.appendChild(iframe)
  return iframe
}

function delIframeByClass(dom, className) {
  var iframs = document.getElementsByClassName(className)
  for (var j = iframs.length - 1; j >= 0; j--) {
    dom.removeChild(iframs[j])
  }
}

export { SetCookie, GetRequest, GetCookieValue, delIframeByClass, createIframe }
