import { useState } from 'react'
import './App.css'

const encrypt = (text, shift) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
};

const decrypt = (text, shift) => {
  return encrypt(text, 26 - shift);
};

const App = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value, 10));
  };

  const handleEncrypt = () => {
    const encrypted = encrypt(inputText, shift);
    setEncryptedText(encrypted);
  };

  const handleDecrypt = () => {
    const decrypted = decrypt(encryptedText, shift);
    setDecryptedText(decrypted);
  };

  return (
    <div>
      <h1>Criptografia React</h1>
      <div>
        <label>
          Palavra:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Deslocamento:
          <input
            type="number"
            value={shift}
            onChange={handleShiftChange}
            min="0"
          />
        </label>
      </div>
      <div>
        <button onClick={handleEncrypt}>Criptografar</button>
        <button onClick={handleDecrypt}>Descriptografar</button>
      </div>
      <div>
        <p>Palavra Criptografada: {encryptedText}</p>
        <p>Palavra Descriptografada: {decryptedText}</p>
      </div>
    </div>
  );
};

export default App;
