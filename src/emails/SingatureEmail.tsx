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
  Section,
} from '@react-email/components';
import { icons } from './icons';
import { ImportFonts } from './ImportFonts';

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
      <span className=" whitespace-nowrap border-brand bg-brand align-middle">
        <span className="inline-block border-brand align-middle">
          <img
            src={icon || icons.prod.empty}
            alt={text}
            width="10"
            height="10"
            className="border-brand align-middle inline-block"
          />
        </span>
        &nbsp;&nbsp;
        <Link
          href={href}
          className="text-white text-[10.5px] align-middle decoration-white border-brand my-0 overflow-hidden leading-5 text-ellipsis whitespace-nowrap"
          color="#ffffff"
        >
          {text}&nbsp;
        </Link>
      </span>
      <p className="my-0 leading-[0] border-brand">&nbsp;</p>
    </>
  );
};

const SignatureEmail: React.FC<Props> = ({
  data: { title, email, email2, phone, phone2, name, name2 },
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Section align="left" width={500}>
        <Row
          className="text-white border-brand border-0"
          bgcolor={BRAND_COLOR}
          align="left"
        >
          <ImportFonts />
          {/* ABC */}
          <Column
            align="center"
            className="px-2 py-2 border-brand whitespace-nowrap text-center bg-brand text-white"
            width={200}
          >
            {/* Name */}
            <Img
              src={icons.prod.logo}
              alt="Logo"
              width="62"
              height="62"
              className="mx-auto"
            />

            <Text className="text-[12px] p-0 m-0 border-brand text-white">
              {name}
            </Text>

            {name2 && (
              <Text className="text-[12px] p-0 m-0 border-brand leading-3 text-white">
                {name2}
              </Text>
            )}

            <Text
              className="text-[10px] p-0 m-0 leading-6 font-light border-brand text-white"
              color="#ffffff"
            >
              {title}
            </Text>
          </Column>

          <Column
            align="left"
            className="border-brand text-white py-2 bg-brand"
            width={250}
          >
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
              href="https://www.linkedin.com/company/brainvector/"
              text="Brain Vector"
              icon={icons.prod.linkedin}
            />
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
