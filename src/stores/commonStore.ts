class CommonStore {
    userInputOnLogin: string = "";
    password: string = "";
    isAdmin: boolean = false;
    loginUserId: number = 0;

    authenticateUser() {}

    initialDataRendering() {}

    showLoader() {}
}

export const commonStore = new CommonStore();
