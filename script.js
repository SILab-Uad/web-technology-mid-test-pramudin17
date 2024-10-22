// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const HurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const HurufKecil = "abcdefghijklmnopqrstuvwxyz";
    const Nomer = "0123456789";
    const LogoSpesial = "!@#$%^&*()";

    let charSet = "";
    // TODO: Create a variable for the character set based on selected options
    if (options.HurufBesar) charSet +=  HurufBesar;
    if (options.HurufKecil) charSet += HurufKecil;
    if (options.Nomer) charSet += Nomer;
    if (options.LogoSpesial) charSet += LogoSpesial;

    if(charSet === "") return "minimal masukin satu pilihan.";
    let password =  "";


        

    // TODO: Generate the password based on the selected criteria
    for (let i = 0; i < length; i++){
        const  randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];

    }
    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        HurufBesar: document.getElementById('HurufBesar').checked,
        HurufKecil: document.getElementById('HurufKecil').checked,
        Nomer: document.getElementById('Nomer').checked,
        LogoSpesial: document.getElementById('LogoSpesial').checked,
    };
    
    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});
// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('BERHASIL DI COPY BANG');
        }).catch(err => {
            console.error('COBA LAGI, BISMILLAH: ', err);
        });
    } else {
        alert('TIDAK ADA PASSWORD YANG DI COPY BANG ');
    }
});
