import React from 'react';
import { render } from '@react-email/render';
import tailwindConfig from './tailwind';
import { Tailwind } from '@react-email/components';
import { icons } from './icons';

export type SignatureData = {
  title: string;
  name: string;
  name2: string;
  phone: string;
  phone2: string;
  email: string;
  email2: string;
};

type Props = {
  data: SignatureData;
};

type IconRowProps = {
  href: string;
  text: string;
  icon?: string;
};

const IconRow = ({ href, text, icon }: IconRowProps) => {
  return (
    <>
      <span className="inline-block align-middle border-transparent">
        {icon ? (
          <img
            src={icon}
            alt={text}
            width="11"
            height="11"
            className="border-transparent align-middle inline-block"
          />
        ) : null}
      </span>
      <span className="border-transparent">&nbsp;&nbsp;</span>
      <a
        href={href}
        className="text-[11px] align-middle decoration-brand text-brand leading-3 border-transparent"
        color="#ffffff"
      >
        {text}&nbsp;
      </a>
    </>
  );
};

export const SignatureSimple: React.FC<Props> = ({
  data: { title, email, email2, phone, phone2, name, name2 },
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <div>
        {/* Name */}
        <img src={icons.prod.logoFill} alt="Logo" width="80" height="80" />

        <span className="border-transparent bg-white leading-[0]">&nbsp;</span>

        <div className="text-[14px] p-0 m-0 bg-white font-bold">
          {name}
          {name2 ? ` | ${name2}` : ''}
        </div>

        <div className="text-[11px] p-0 m-0 font-light bg-white">{title}</div>

        <span className="border-transparent bg-white leading-[0]">-</span>

        <div className="bg-white">
          <div className="border-transparent my-0">
            <IconRow
              href={`tel:${phone.replace(/ /g, '')}`}
              text={phone}
              icon={icons.prod.phoneColor}
            />
            {!!phone2 && (
              <>
                <span className="border-transparent">&nbsp;-</span>
                <IconRow
                  href={`tel:${phone2.replace(/ /g, '')}`}
                  text={phone2}
                  icon=""
                />
              </>
            )}
          </div>
          <div className="border-transparent my-0">
            <IconRow
              href={`mailto:${email}`}
              text={email}
              icon={icons.prod.mailColor}
            />
            {!!email2 && (
              <>
                <span className="border-transparent">&nbsp;-</span>
                <IconRow href={`mailto:${email2}`} text={email2} icon="" />
              </>
            )}
          </div>

          <div className="border-transparent my-0">
            <IconRow
              href="https://www.brainvector.com.au"
              text="www.brainvector.com.au"
              icon={icons.prod.linkColor}
            />
          </div>

          <div className="border-transparent my-0">
            <IconRow
              href="https://www.linkedin.com/company/brainvector/"
              text="Brain Vector"
              icon={icons.prod.linkedinColor}
            />
          </div>
        </div>
      </div>
    </Tailwind>
  );
};

export function renderEmailSimple(data: SignatureData) {
  const emailHtml = render(<SignatureSimple data={data} />);

  return emailHtml;
}
