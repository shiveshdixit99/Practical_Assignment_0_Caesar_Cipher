/* to encrypt the string */
const encrypt = function (textToEncrypt, shift) {
  let encryptedText = "";
  for (let i = 0; i < textToEncrypt.length; i++) {
    if (textToEncrypt[i] >= "a" && textToEncrypt[i] <= "z") {
      let c = ((textToEncrypt.charCodeAt(i) - 97 + shift) % 26) + 97; /* If the character is a-z */
      encryptedText += String.fromCharCode(c);
    } else if (textToEncrypt[i] >= "A" && textToEncrypt[i] <= "Z") { /* If the character is A-Z */
      let c = ((textToEncrypt.charCodeAt(i) - 65 + shift) % 26) + 65;
      encryptedText += String.fromCharCode(c);
    } else {
      encryptedText += textToEncrypt[i];   /* If it is not an alphabet*/
    }
  }
  return encryptedText;
};

/**
 * This code will decrypt the string
 */
const decrypt = function (textToDecrypt, shift) {
  return encrypt(textToDecrypt, -shift);
};

/**
 * get current text and encrypt it and update the text fields
 */
const textToEncrypt = document.getElementById("textToEncrypt");
const textToDecrypt = document.getElementById("textToDecrypt");

textToDecrypt.addEventListener("input", (e) => {
  textToEncrypt.value = encrypt(e.target.value, 3);
});

textToEncrypt.addEventListener("input", (e) => {
  textToDecrypt.value = decrypt(e.target.value, 3);
});

