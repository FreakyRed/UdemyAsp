export interface FormState {
    username: string | null,
    password: string | null,
    gender: string | null,
    dateOfBirth: string | null,
    country: string | null,
    city: string | null,
    knownAs: string | null,
}

export const initialState : FormState = {
    username: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    country: '',
    city: '',
    knownAs: '',
}