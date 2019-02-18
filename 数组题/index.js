let badge = [
  {id: 323, badge: 10},
  {id: 323, badge: 10},
  {id: 311, badge: 1},
  {id: 311, badge: 1},
  {id: 311, badge: 1},
  {id: 311, badge: 1},
  {id: 352, badge: 3},
  {id: 352, badge: 100},
  {id: 480, badge: 5}]

// let badgeMerge = [
//   {id: 323, badge: 20},
//   {id: 311, badge: 4},
//   {id: 352, badge: 103},
//   {id: 480, badge: 5}]

  let keys = Array.from(new Set(badge.map(item => item.id)))
  var badgeMerge = keys.map(key => {
    return {
      id: key,
      badge: badge.filter(item => item.id == key).reduce((pre, cur) => pre+cur.badge, 0)
    }
  })