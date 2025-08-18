import { randomBytes } from 'crypto';
export function random(length = 10) {
    return randomBytes(length)
        .toString('base64') // base64 is compact
        .replace(/[^a-zA-Z0-9]/g, '') // remove non-alphanumeric characters
        .slice(0, length); // trim to desired length
}
