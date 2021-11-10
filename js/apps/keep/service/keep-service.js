import { storageService } from "./async-storage-service.js";
import { utilService } from "./util-service.js";

export const bookService = {
  query,
  bookById,
  saveReview,
  saveSearch,
};

const KEEP_KEY = "keepsDB";

var gKeeps = utilService.loadFromStorage(KEEP_KEY) || [
  {
    id: "n101",
    type: "note-txt",
    isPinned: true,
    info: { txt: "Fullstack Me Baby!" },
  },
  {
    id: "n102",
    type: "note-img",
    info: { url: "http://some-img/me", title: "Bobi and Me" },
    style: { backgroundColor: "#00d" },
  },
  {
    id: "n103",
    type: "note-todos",
    info: {
      label: "Get my stuff together",
      todos: [
        { txt: "Driving liscence", doneAt: null },
        { txt: "Coding power", doneAt: 187111111 },
      ],
    },
  },
];
_save

function saveSearch(key, value) {
  utilService.saveToStorage(key, value);
}
function query() {
  return storageService.query(KEEP_KEY);
}

function saveReview(book) {
  return storageService.put(KEEP_KEY, book);
}

function bookById(id) {
  return storageService.get(KEEP_KEY, id);
}
function _save() {
  utilService.saveToStorage(KEEP_KEY, gKeeps);
}
