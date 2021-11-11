import { storageService } from "../../../service/async-storage-service.js";
import { utilService } from "../../../service/util-service.js";

const MAILS_KEY = 'mails';
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
_createMails()

export const mailsService = {
    query,
    getById,
    addNewMail,
    moveToRecycleBin,
    setMailStared,
    updateMail
};

function query() {
    return storageService.query(MAILS_KEY)
}


function moveToRecycleBin(mailId) {
    return getById(mailId)
        .then(mail => {
            mail.isRemoved = true
            return storageService.put(MAILS_KEY, mail)
        })

}

function setMailStared(mailId) {
    return getById(mailId)
        .then(mail => {
            mail.isStared = !mail.isStared
            return storageService.put(MAILS_KEY, mail)
        })
}

function updateMail(mailId) {
    return getById(mailId)
        .then(mail => {
            mail.isRead = true
            return storageService.put(MAILS_KEY, mail)
        })
}

function addNewMail(newMail) {
    return storageService.post(MAILS_KEY, newMail)
}

function getById(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [{
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: new Date().toLocaleString(),
                to: 'nofar@momo.com',
                isRemoved: false,
                isStared: false
            },
            {
                id: 'e102',
                subject: 'How are you?',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: new Date().toLocaleString(),
                to: 'yahav@momo.com',
                isRemoved: false,
                isStared: false

            },
            {
                id: 'e103',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: new Date().toLocaleString(),
                to: 'sharon@momo.com',
                isRemoved: false,
                isStared: false

            },
            {
                id: 'e104',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: new Date().toLocaleString(),
                to: 'mimi@momo.com',
                isRemoved: false,
                isStared: false

            },


        ]
        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}