import { Font } from '@react-email/components';

export function ImportFonts() {
  return (
    <>
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
    </>
  );
}
