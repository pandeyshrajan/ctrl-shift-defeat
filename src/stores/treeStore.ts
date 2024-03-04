import { observable } from "mobx";

class treeStore {
    @observable rootStore: any;

    constructor(rootStore: any) {
        this.rootStore = rootStore;
    }
}

export default treeStore;
