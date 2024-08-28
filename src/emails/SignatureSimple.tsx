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
import { SignatureData } from './SingatureEmail';

type Props = {
  data: SignatureData;
};

export const SignatureSimple: React.FC<Props> = ({
  data: { title, email, email2, phone, phone2, name, name2 },
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Row className="bg-transparent">
        <Column align="center" valign="top" width={120}>
          {/* Name */}
          <Text>
            <Img src={icons.prod.logoFill} alt="Logo" width="80" height="80" />
          </Text>

          <Link href="https://www.linkedin.com/company/brainvector/">
            <Img
              src={icons.prod.linkedinColor}
              className="mt-1"
              alt="linkedin"
              width="16"
              height="16"
            />
          </Link>
        </Column>

        <Column width={30} />

        <Column valign="top">
          <Text className="text-xs font-bold my-0 mt-4 bg-transparent">
            {name} {name2 ? ` | ${name2}` : ''}
          </Text>
          <Text className="text-xs font-bold my-0 mt-2  bg-transparent">
            {title}
          </Text>

          <Text className="text-xs my-0 mt-5  bg-transparent">
            <b>M: </b>
            {phone} {phone2 ? ` | ${phone2}` : ''}
          </Text>

          <Text className="text-xs my-0 mt-2  bg-transparent">
            <b>E: </b>
            {email} {email2 ? ` | ${email2}` : ''}
          </Text>

          <Text className="text-xs my-0 mt-2  bg-transparent">
            <b>W: </b>https://www.brainvector.com.au
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
