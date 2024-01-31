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
// Text Input Props
interface ITextInputProps {
    label?: string,
    type?: string,
    id?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    registerInput?: any
}