type userRole = "Admin" | "User" | "Moderator" | "Guest";
type status = 'Pending'

interface User {
    name: string;
    role: userRole;
    email: string;
}

interface Admin extends User {
    permissions: string[];
}

interface Moderator extends User {
    moderatedSections: string[];
}

const bigBoos: Admin = {
    name: "Big Boos",
    role: "Admin",
    email: "bigboos@example.com",
    permissions: ["manage_users", "edit_content"],
}

type book = {
    title: string;
    author: string;
    publishedYear: number;
};

// type book = {
//     location: string;
// }

interface Gift {
    name: string;
}
interface Gift {
    price: number;
}

const bDayGift: Gift = {
    name: "Teddy Bear",
    price: 29.99
}
    

enum APIStatus {
    Loading = 'Loading',
    Pending = 'Pending'
}