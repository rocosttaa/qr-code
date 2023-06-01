import { useState } from 'react';
import QRCode from 'react-qr-code';
import QrCodeLink from 'qrcode'
import './App.css';

function App() {

  const [link, setLink] = useState('')
  const [qrcodelink, setQrcodeLink] = useState('')

  function handleGenerate(link_url){
    QrCodeLink.toDataURL(link_url,{
      width: 600,
      margin: 3,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className='container'>
      <div className='topo'><h1>Gerador de QrCode</h1></div>
      <QRCode 
      value={link}
      />


      <input
      className='input'
      placeholder='Digite sua url:'
      value={link}
      onChange={(e) => handleQrcode(e)}
      />

      <a href={qrcodelink} download={'qrcode.png'}>Baixar QrCode</a>
    </div>
  );
}

export default App;
