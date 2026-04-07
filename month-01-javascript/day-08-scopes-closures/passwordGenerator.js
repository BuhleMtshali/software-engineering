//THIS IS THE OUTER FUNCTION
function createPasswordGenerator(){
    //THESE WILL THE PASSWORD CHARACTERS
    const charSets = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        nums: '0123456789',
        special: '!@#$%^&*()-_=+[]{}|;:,.<>?'
    };

    //THIS IS GONNA BE THE NESTED INNER FUNCTION
    return function generate(length = 10){
        let allowedChars = charSets.lower + charSets.upper;
        allowedChars += charSets.nums + charSets.special;   

        let password = '';
    }
}