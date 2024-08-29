import React from 'react';
import { render } from '@react-email/render';
import tailwindConfig from './tailwind';
import {
  Column,
  Img,
  Link,
  Row,
  Tailwind,
  Text,
} from '@react-email/components';
import { icons } from './icons';
import { SignatureData } from './types';

type Props = {
  data: SignatureData;
};

export const SignatureSimple: React.FC<Props> = ({
  data: { title, email, email2, phone, phone2, name, name2 },
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Row className="bg-transparent border-white">
        <Column
          className="border-white"
          align="center"
          valign="top"
          width={120}
        >
          {/* Name */}
          <Text className="border-white mt-4">
            <Img
              className="border-white"
              src={icons.prod.logoFill}
              alt="Logo"
              width="75"
              height="75"
            />
          </Text>

          <Link
            className="border-white"
            href="https://www.linkedin.com/company/brainvector/"
          >
            <Img
              src={icons.prod.linkedinColor}
              className="border-white mt-1"
              alt="linkedin"
              width="16"
              height="16"
            />
          </Link>
        </Column>

        <Column className="border-white" width={10} />

        <Column className="border-white" valign="top">
          <Text className="text-sm font-bold my-0 mt-4 bg-transparent border-white">
            {name} {name2 ? ` | ${name2}` : ''}
          </Text>
          <Text className="text-sm font-bold my-0 mt-2  bg-transparent border-white">
            {title}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-5  bg-transparent border-white">
            <b className="border-white">M: </b>
            {phone} {phone2 ? ` | ${phone2}` : ''}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-2  bg-transparent border-white">
            <b className="border-white">E: </b>
            {email} {email2 ? ` | ${email2}` : ''}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-2  bg-transparent border-white">
            <b className="border-white">W: </b>www.brainvector.com.au
          </Text>
        </Column>
      </Row>
    </Tailwind>
  );
};

export function renderEmailSimple(data: SignatureData) {
  const emailHtml = render(<SignatureSimple data={data} />);

  return emailHtml;
}
