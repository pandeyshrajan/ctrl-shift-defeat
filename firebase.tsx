import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCc0jaulV25y-Kuh8FYHMWtIW0tmg7VYww",
    authDomain: "people-portal-75866.firebaseapp.com",
    projectId: "people-portal-75866",
    storageBucket: "people-portal-75866.appspot.com",
    messagingSenderId: "896460041051",
    appId: "1:896460041051:web:eca166c726092ee60bc87e",
    measurementId: "G-H6B0T4BLB3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
