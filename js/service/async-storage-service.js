export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
    pin,
    pinRemove,
    duplicate,
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return Promise.resolve(entities);
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity.id === entityId))
}

function post(entityType, newEntity) {
    newEntity.id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.unshift(newEntity);
            _save(entityType, entities)
            return newEntity;
        })
}

function postMany(entityType, newMail) {
    return query(entityType)
        .then(entities => {
            entities.push(...newEntities);
            _save(entityType, entities)
            return entities;
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === updatedEntity.id);
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity;
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId);
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function pin(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId);
            const keep = entities.splice(idx, 1)
            keep[0].isPinned = true;
            entities.unshift(keep[0])
            _save(entityType, entities)
        })
}

function pinRemove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId);
            const keep = entities.splice(idx, 1)
            keep[0].isPinned = false;
            entities.push(keep[0])
            _save(entityType, entities)
        })
}

function duplicate(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity.id === entityId);
            const newEntities = [];
            for (var i = 0; i < entities.length; i++) {
                newEntities.push(entities[i])
                if (i === idx) {
                    newEntities.push(JSON.parse(JSON.stringify(entities[i])))
                    newEntities[newEntities.length - 1].id = _makeId()
                }

            }
            // console.log(newEntities);
            _save(entityType, newEntities)
            return newEntities
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}