import {openDB} from "idb";

class DBLocalUtil {

    static get SALE_HISTOREY_KEY() {
        return 'sale_history';
    };

    static getConnection() {

        return openDB('keyval-store', 1, {
            upgrade(db) {
                db.createObjectStore(DBLocalUtil.SALE_HISTOREY_KEY, {
                    autoIncrement: true,
                });
            },
        });

    }

}

export default DBLocalUtil;