export default function generatePass() {
    let password: string = ''
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%¨&*()_+-=<>' // 74 characters
    let passwordLength = 12

    for(let index = 0; index < passwordLength; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }


    return password
}