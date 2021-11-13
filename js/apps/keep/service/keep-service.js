import { storageService } from "../../../service/async-storage-service.js";
import { utilService } from "../../../service/util-service.js";
export const keepService = {
    query,
    keepById,
    saveReview,
    saveSearch,
    addKeep,
    removeKeep,
    pinKeep,
    pinRemove,
    duplicate,
    saveAfterUserInput,
    saveKeeps,
};

const KEEP_KEY = "keepsDB";

var gKeeps = utilService.loadFromStorage(KEEP_KEY) || [{
        id: "n101",
        type: "note-txt",
        label: null,
        isPinned: true,
        info: { txt: "Fullstack Me Baby!" },
        style: {
            backgroundColor: '#1f9f9a',
            fontFamily: 'Arial, Helvetica, sans-serif'
        }
    },
    {
        id: "n102",
        type: "note-img",
        label: null,
        info: {
            url: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            title: "Bobi and Me",
        },
        isPinned: false,
        style: { backgroundColor: "#1f9f9a", fontFamily: 'Arial, Helvetica, sans-serif' },
    },
    {
        id: "n103",
        type: "note-todos",
        label: "Work",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 },
            ],
        },
        style: {
            backgroundColor: "#1f9f9a",
            fontFamily: 'Arial, Helvetica, sans-serif'
        },
        isPinned: false,
    },
    {
        id: "n104",
        type: "note-vid",
        label: 'Critical',
        info: {
            url: "https://www.youtube.com/embed/MnuwI7G_huw",
            title: "Latte and Me",
        },
        isPinned: false,
        style: { backgroundColor: "#1f9f9a", fontFamily: 'Arial, Helvetica, sans-serif' },
    },
];
_save();

function addKeep(keepToAdd) {
<<<<<<< HEAD
  gKeeps.push(keepToAdd);
  _save();
  return Promise.resolve({
    txt: 'Keep added',
    type: 'success'
})
=======
    gKeeps.push(keepToAdd);
    _save();
    return Promise.resolve({
        txt: 'Keep added',
        type: 'success'
    })
>>>>>>> 8e9d54886253a6e17c4e2a5ef1d4a4f0de76e341
}

function duplicate(id) {
    return storageService.duplicate(KEEP_KEY, id)
}

function removeKeep(id) {
    return storageService.remove(KEEP_KEY, id);
}

function pinRemove(id) {
    return storageService.pinRemove(KEEP_KEY, id)

}

function pinKeep(id) {
    return storageService.pin(KEEP_KEY, id)
}

function saveSearch(key, value) {
    utilService.saveToStorage(key, value);
}

function query() {
    return storageService.query(KEEP_KEY);
}

function saveReview(book) {
    return storageService.put(KEEP_KEY, book);
}

function keepById(id) {
    return storageService.get(KEEP_KEY, id);
}

function saveKeeps(keeps) {
    gKeeps = keeps
    utilService.saveToStorage(KEEP_KEY, gKeeps);
}

function _save() {
    utilService.saveToStorage(KEEP_KEY, gKeeps);
}

function saveAfterUserInput() {
    gKeeps = utilService.loadFromStorage(KEEP_KEY)
}