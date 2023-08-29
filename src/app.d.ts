// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user?: {
        username: string;
      };
    }

    // interface PageData {}
    // interface Platform {}

    interface JWTPayload {
      id: string;
      iat: number;
      exp: number;
    }
  }

  namespace CustomTypes {
    interface addTrainRequestBody {
      name: string;
      capacity: number;
      from: string;
      to: string;
      duration: number;
      price: number;
    }
  }
}

export {};
