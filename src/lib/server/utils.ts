import constants from "./constants"

export const customRedirect = (route?: string) => new Response(null, { status: 307, headers: { 'Location': `${constants.baseURL}/${route ?? ''}` } })