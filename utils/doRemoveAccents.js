exports.doRemoveAccents = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
