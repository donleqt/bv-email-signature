import { useState } from 'react';
import './App.css';
import SignatureEmail, {
  renderEmail,
  SignatureData,
} from './emails/SingatureEmail';
import UserForm from './components/UserForm';
import { copyHtmlWithStylesToClipboard } from './helpers/copyToClipboard';
import { renderEmailSimple, SignatureSimple } from './emails/SignatureSimple';

const defaultSigData: SignatureData = {
  name: 'Dr Stephane Verhaeghe',
  // name2: 'Dan Stevens',
  title: 'Co-Founders',
  phone: '+61 429 150 869',
  // phone2: '+61 402 450 030',
  email: 'stephane@brainvector.com.au',
  // email2: 'dan@brainvector.com.au',
};

function App() {
  const [sigData, setSigData] = useState<SignatureData>(defaultSigData);

  return (
    <div className="px-4">
      <div className="grid grid-cols-[0.5fr_1fr] gap-5">
        <div className="mt-12 bg-white shadow-md p-5 rounded">
          <UserForm defaultData={sigData} onChange={setSigData} />
        </div>

        <div className="mt-12 bg-white shadow-md p-5 rounded flex flex-col gap-8">
          {/* Option 1 */}
          <div>
            <div id="signature" className="flex flex-col">
              <SignatureEmail data={sigData} />
            </div>

            <div>
              <button
                type="button"
                className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  const html = renderEmail(sigData);
                  copyHtmlWithStylesToClipboard(html);
                }}
              >
                Copy Signature 1
              </button>
            </div>
          </div>

          <hr />

          {/* Option 2 */}
          <div>
            <div id="signature2" className="flex flex-col">
              <SignatureSimple data={sigData} />
            </div>

            <div>
              <button
                type="button"
                className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => {
                  const html = renderEmailSimple(sigData);
                  copyHtmlWithStylesToClipboard(html);
                }}
              >
                Copy Signature 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
