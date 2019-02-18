let data = [
  {
    ordermanageid: "f0fce1e36850ec220168983328930251",
    ordermanagenumber: "20190129140156114",
    orderstate: "1",
    problemdescription: "test1229",
    problemtype: "4",
    submittime: "2019-01-29 14:01:56",
  },
  {
    ordermanageid: "f0fce1e36850ec22016898332b970252",
    ordermanagenumber: "20190129140156886",
    orderstate: "1",
    problemdescription: "test1229",
    problemtype: "4",
    submittime: "2019-01-29 14:01:56"
  },
  {
    ordermanageid: "f0fce1e36850ec2201689833260c0250",
    ordermanagenumber: "20190129140155458",
    orderstate: "1",
    problemdescription: "test1229",
    problemtype: "4",
    submittime: "2019-01-29 14:01:55"
  }
]

const statusMap = {
  '1': '其他',
  '2': '技术咨询',
  '3': '系统错误',
  '4': '操作帮助'
}

data.forEach(item => {
  item.problemtype = statusMap[item.problemtype]
})
console.log(data)


//2019-2-18
filterData(data) {
  const statusMap = {
    '1': '其他',
    '2': '技术咨询',
    '3': '系统错误',
    '4': '操作帮助'
  }
  data.forEach(item => {
    // 如果用 filter 方式会循环三遍
    // item.problemtype = statusMap[item.problemtype] 
    switch (item.problemtype) {
      case '1':
        item.problemtype = '其他'
        break
      case '2':
        item.problemtype = '技术咨询'
        break
      case '3':
        item.problemtype = '系统错误'
        break
      case '4':
        item.problemtype = '操作帮助'
        break
    }
  })
  return data
}