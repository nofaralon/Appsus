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

};

function query() {
    return storageService.query(MAILS_KEY)
}


function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [{
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: new Date().toString(),
                to: 'nofar@momo.com'
            },
            {
                id: 'e102',
                subject: 'How are you?',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: Date.now(),
                to: 'yahav@momo.com'
            },
            {
                id: 'e103',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: Date.now(),
                to: 'sharon@momo.com'
            },
            {
                id: 'e104',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: Date.now(),
                to: 'mimi@momo.com'
            },


        ]
        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}