// Post data card
type IPostData = {
    username: string;
    image: any;
    location: string;
}
// sidebar pannel
interface ISidebarPannel {
    status: boolean;
    content: string
}

// Registration
interface IRegistrationSchema {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}
// Credential
interface ICredentialSchema {
    username?: string;
    password?: string;
}