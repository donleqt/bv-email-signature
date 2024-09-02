import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import { copyHtmlWithStylesToClipboard } from './helpers/copyToClipboard';
import { renderEmailSimple, SignatureSimple } from './emails/SignatureSimple';
import { SignatureData } from './emails/types';

const defaultSigData: SignatureData = {
  name: 'Dr Stephane Verhaeghe',
  // name2: 'Dan Stevens',
  title: 'Co-Founders',
  phone: '+61 429 150 869',
  // phone2: '+61 402 450 030',
  email: 'stephane@brainvector.com.au',
  // email2: 'dan@brainvector.com.au',
};

const password = 'YnZzaWdAMjAyNA==';
let isLogged = process.env.NODE_ENV === 'development';
let value;

if (!isLogged) {
  value = window.prompt('Enter the password:');
}

if (value && btoa(value) === password) {
  isLogged = true;
}

function App() {
  const [sigData, setSigData] = useState<SignatureData>(defaultSigData);

  if (!isLogged) {
    return <h1 className="text-center">Comming Soon!</h1>;
  }

  return (
    <div className="px-4">
      <div className="grid grid-cols-[0.5fr_1fr] gap-5">
        <div className="mt-12 bg-white shadow-md p-5 rounded">
          <UserForm defaultData={sigData} onChange={setSigData} />
        </div>

        <div className="mt-12 bg-white shadow-md p-5 rounded flex flex-col gap-8">
          <div>
            <div id="signature2" className="flex flex-col">
              <SignatureSimple data={sigData} />
            </div>

            <div>
              <hr className="my-6" />
              <button
                type="button"
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  const html = renderEmailSimple(sigData);
                  copyHtmlWithStylesToClipboard(html);
                }}
              >
                Copy Signature
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
