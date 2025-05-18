
import { ReactComponent as Dashboard } from "../assets/dashboard.svg";
import { ReactComponent as Teachers } from "../assets/teachers.svg";
import { ReactComponent as Parents } from "../assets/parents.svg";
import { ReactComponent as Students } from "../assets/students.svg";
import { ReactComponent as Classes } from "../assets/classes.svg";
import { ReactComponent as Blog } from "../assets/blog.svg";
import { ReactComponent as Attendance } from "../assets/teachers.svg";

import pic from '../assets/parentsTablePic.svg';

import news from "../assets/images/news.jpg";



export const pages = [
    { id: 1, path: "/", name: "Dashboard", icon: <Dashboard /> },
    { id: 2, path: "/teachers", name: "Teachers", icon: <Teachers /> },
    { id: 3, path: "/parents", name: "Parents", icon: <Parents /> },
    { id: 4, path: "/students", name: "Students", icon: <Students /> },
    { id: 5, path: "/classes", name: "Classes", icon: <Classes /> },
    { id: 6, path: "/schools", name: "Schools", icon: <Classes /> },
    { id: 7, path: "/blog", name: "Blog", icon: <Blog /> },
    { id: 8, path: "/teacher-attendance", name: "TeacherAttendance", icon: <Attendance /> },

];

export const parentTableFields = [
    "Picture",
    "Name",
    "Username",
    "Password",
    "Gender",
    "Student Number",
    "Address",
    "Phone Number",
    "Payment Method",

]

export const tempParentsTableData = [
    { id: 1, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 2, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 3, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 4, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 5, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 6, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 7, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
    { id: 8, picture: pic, name: "Daniel", username: "Kofi", password: "****", gender: "Male", studentNumber: "12", address: "6 oct", phoneNumber: "0122**", paymentMethod: "cash" },
]

export const eventsData = [
    { id: 1, image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
    { id: 2, image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
    { id: 3, image: news, title: 'Color', date: 'Last updated 3 mins ago', body: 'it is a color party in school , price of ticket 200 pounds' },
];