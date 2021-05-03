import React, {Component} from 'react';
import {openDB} from "idb";

class Test extends Component {
    static ROUTE = '/test';

    dbPromise;

    componentDidMount() {
        this.putSomeData()
    }

    putSomeData() {
        this.dbPromise = openDB('keyval-store', 1, {
            upgrade(db) {
                db.createObjectStore('keyval', {
                    autoIncrement: true,
                });
            },
        });
    }

    async set(val) {
        (await this.dbPromise).add('keyval', val);
    }

    async get() {
        this.dbPromise = openDB('keyval-store', 1, {
            upgrade(db) {
                db.createObjectStore('keyval', {
                    autoIncrement: true,
                });
            },
        });

        console.log(
            await (await this.dbPromise).getAll('keyval')
        );
    }

    render() {
        return (
            <div>
                <button onClick={() => this.set('teste 1')}>
                    set
                </button>
                <button onClick={() => this.get()}>
                    get
                </button>
            </div>
        );
    }
}

export default Test;