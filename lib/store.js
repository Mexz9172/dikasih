const toMs = require('ms')
const fs = require('fs')

function isAlreadyResponList(groupID, key, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            found = true
        }
    })
    return found
}

function sendResponList(groupId, key, _dir) {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === groupId && _dir[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].response
    }
}

function isAlreadyResponListGroup(groupID, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

function renameList(id, key, newKey, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === id && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].key = newKey
    }
}
function delResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
    }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].response = response
        _db[position].isImage = isImage
        _db[position].image_url = image_url
        fs.writeFileSync('./database/list-message.json', JSON.stringify(_db, null, 3))
    }
}
function addResponList(groupID, key, response, isImage, image_url, _db) {
    var obj_add = {
        id: groupID,
        key: key,
        response: response,
        isImage: isImage,
        image_url: image_url
    }
    _db.push(obj_add)
    fs.writeFileSync('./database/list.json', JSON.stringify(_db, null, 3))
}

function getDataResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position]
    }
}

function isAlreadyResponList(groupID, key, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            found = true
        }
    })
    return found
}

function sendResponList(groupId, key, _dir) {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === groupId && _dir[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].response
    }
}

function isAlreadyResponListGroup(groupID, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

function delResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./database/list.json', JSON.stringify(_db, null, 3))
    }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].response = response
        _db[position].isImage = isImage
        _db[position].image_url = image_url
        fs.writeFileSync('./database/list.json', JSON.stringify(_db, null, 3))
    }
}
module.exports = {
updateResponList,
  delResponList,
  renameList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
}