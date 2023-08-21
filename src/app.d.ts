// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: User
        }

        // interface PageData {}
        // interface Platform {}

        interface User {
            id: string
            iat: number
            exp: number
        }
    }

    namespace CustomTypes {
        interface addTrainRequestBody {
            name: string
            capacity: number
            from: string
            to: string
            duration: number
            price: number
        }
    }
}

export { };
