import React from 'react';
import { render } from '@react-email/render';
import tailwindConfig from './tailwind';
import {
  Tailwind,
  Column,
  Img,
  Row,
  Text,
  Link,
  Font,
} from '@react-email/components';

export type SignatureData = {
  title: string;
  name: string;
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
  lastItem?: boolean;
};

const IconRow = ({ href, text, icon, lastItem }: IconRowProps) => {
  return (
    <Link href={href} title={text}>
      <Row className="border-brand ">
        <Column width={30} className="border-brand">
          {!!icon && (
            <Img
              src={icon}
              alt={text}
              width="14"
              height="14"
              className="border-brand"
            />
          )}
        </Column>
        <Column className="border-brand">
          <Text className="text-white underline text-[12px] border-brand my-0">
            {text}
          </Text>
        </Column>
      </Row>
    </Link>
  );
};

const SignatureEmail: React.FC<Props> = ({
  data: { title, email, email2, phone, phone2, name },
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Row className="bg-brand text-white border-brand">
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
            format: 'woff2',
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Column align="center" className="py-6 px-4 border-brand w-[400px]">
          {/* Name */}
          <Img src="./img/logo.png" alt="Logo" width="90" height="90" />
          <Text className="text-[16px] mb-0 mt-2 border-brand text-white">
            {name}
          </Text>
          <Text className="text-[12px] my-0 font-light border-brand text-white">
            {title}
          </Text>
        </Column>
        <Column align="left" className="border-brand w-[230px]  text-white">
          <IconRow
            href={`tel:${phone.replace(/ /g, '')}`}
            text={phone}
            icon="./img/phone.png"
          />

          {!!phone2 && (
            <IconRow
              href={`tel:${phone2.replace(/ /g, '')}`}
              text={phone2}
              icon=""
            />
          )}

          <IconRow
            href={`mailto:${email}`}
            text={email}
            icon="./img/mail.png"
          />
          <IconRow href={`mailto:${email2}`} text={email2} icon="" />

          <IconRow
            href="https://www.brainvector.com.au"
            text="www.brainvector.com.au"
            icon="./img/link.png"
          />

          <IconRow
            lastItem
            href="https://www.linkedin.com/company/brainvector/"
            text="Brain Vector"
            icon="./img/linkedin.png"
          />
        </Column>
        <Column align="center" className="border-brand">
          &nbsp;
        </Column>
      </Row>
    </Tailwind>
  );
};

export function renderEmail(data: SignatureData) {
  const emailHtml = render(<SignatureEmail data={data} />);

  return emailHtml;
}

export default SignatureEmail;
