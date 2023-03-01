const Storage = (localStorage) => ({ name }) => ({
    get() {
        try {
            return JSON.parse(localStorage.getItem(name));
        } catch (ex) {
            return null;
        }
    },

    save(obj) {
        try {
            localStorage.setItem(name, JSON.stringify(obj));
        } catch (ex) {
            console.warn('Check out your permissions or space');
        }
    },

    remove(name){
        try {
            return JSON.removeItem(localStorage.getItem(name));
        } catch (ex) {
            return null;
        }
    }
});

export default Storage(window.localStorage);
export const StorageTest = Storage; 