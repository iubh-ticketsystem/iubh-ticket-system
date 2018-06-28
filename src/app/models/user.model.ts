export interface Memberstate {
    nutzer?: boolean;
    iubh?: boolean;
    admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    username?: string;
    memberstate?: Memberstate;
}