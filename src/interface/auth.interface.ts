export interface hospitalReg {
    id: number,
    name: string;
    address: string;
    domain: string;
    email: string;
    phoneNumber: string;
    password: string;
    hospital_reg: string;
}

export type hospitalLogIn = Pick<hospitalReg, "email" | "password">