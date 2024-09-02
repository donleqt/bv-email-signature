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
      <Row className="bg-transparent border-none">
        <Column className="border-none" align="center" valign="top" width={120}>
          {/* Name */}
          <Text className="border-none mt-4">
            <Img
              className="border-none"
              src={icons.prod.logoFill}
              alt="Logo"
              width="75"
              height="75"
            />
          </Text>

          <Link
            className="border-none"
            href="https://www.linkedin.com/company/brainvector/"
          >
            <Img
              src={icons.prod.linkedinColor}
              className="border-none mt-1"
              alt="linkedin"
              width="16"
              height="16"
            />
          </Link>
        </Column>

        <Column className="border-none" width={10} />

        <Column className="border-none" valign="top">
          <Text className="text-sm font-bold my-0 mt-4 bg-transparent border-none">
            {name} {name2 ? ` | ${name2}` : ''}
          </Text>
          <Text className="text-sm my-0 mt-2  bg-transparent border-none">
            {title}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-5  bg-transparent border-none">
            <b className="border-none">M: </b>
            {phone} {phone2 ? ` | ${phone2}` : ''}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-2  bg-transparent border-none">
            <b className="border-none">E: </b>
            {email} {email2 ? ` | ${email2}` : ''}
          </Text>

          <Text className="text-xs text-gray-600 my-0 mt-2  bg-transparent border-none">
            <b className="border-none">W: </b>www.brainvector.com.au
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
