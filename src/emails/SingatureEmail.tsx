import React from 'react';
import { render } from '@react-email/render';
import tailwindConfig, { BRAND_COLOR } from './tailwind';
import {
  Tailwind,
  Column,
  Img,
  Row,
  Text,
  Link,
  Font,
  Section,
} from '@react-email/components';
import { icons } from './icons';

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
    <Link href={href} title={text} className="underline decoration-white">
      <Row className="border-brand " cellPadding={0} color="#ffffff">
        <Column
          width={30}
          className="border-brand"
          align="left"
          valign="middle"
          color="#ffffff"
        >
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
        <Column
          className="border-brand underline"
          color="#ffffff"
          align="left"
          valign="middle"
        >
          <Text
            className="text-white underline text-[12px] border-brand my-0"
            color="#ffffff"
          >
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
      <Section>
        <Row className="text-white border-brand" bgcolor={BRAND_COLOR}>
          <Font
            fontFamily="Poppins, verdana, geneva, sans-serif;"
            fallbackFontFamily={['Verdana', 'Georgia', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
              format: 'woff2',
            }}
            fontWeight={500}
            fontStyle="normal"
          />
          <Font
            fontFamily="Poppins, verdana, geneva, sans-serif;"
            fallbackFontFamily={['Verdana', 'Georgia', 'sans-serif']}
            webFont={{
              url: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
          <Column
            align="left"
            className="py-6 px-10 border-brand whitespace-nowrap text-center"
            style={{
              width: Math.max(300, 12 * name.length),
            }}
          >
            {/* Name */}
            <Img
              className="mx-auto mb-2"
              src={icons.prod.logo}
              alt="Logo"
              width="90"
              height="90"
            />
            <Text
              className="text-[16px] p-0 m-0 border-brand text-white whitespace-nowrap"
              color="#ffffff"
            >
              {name}
            </Text>
            <Text
              className="text-[12px] p-0 m-0  font-light border-brand text-white whitespace-nowrap"
              color="#ffffff"
            >
              {title}
            </Text>
          </Column>
          <Column align="left" className="border-brand w-[400px] text-white">
            <IconRow
              href={`tel:${phone.replace(/ /g, '')}`}
              text={phone}
              icon={icons.prod.phone}
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
              icon={icons.prod.mail}
            />
            <IconRow href={`mailto:${email2}`} text={email2} icon="" />

            <IconRow
              href="https://www.brainvector.com.au"
              text="www.brainvector.com.au"
              icon={icons.prod.link}
            />

            <IconRow
              lastItem
              href="https://www.linkedin.com/company/brainvector/"
              text="Brain Vector"
              icon={icons.prod.linkedin}
            />
          </Column>
          <Column align="center" className="border-brand">
            <div>&nbsp;</div>
          </Column>
        </Row>
      </Section>
    </Tailwind>
  );
};

export function renderEmail(data: SignatureData) {
  const emailHtml = render(<SignatureEmail data={data} />);

  return emailHtml;
}

export default SignatureEmail;
