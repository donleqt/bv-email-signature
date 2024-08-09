export function copyToClipboard(text: string): void {
  if (!navigator.clipboard) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; // Prevent scrolling to bottom of the page
    textArea.style.opacity = '0'; // Make it invisible
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy', err);
    }

    document.body.removeChild(textArea);
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
}

export function copyHtmlWithStylesToClipboard(htmlString: string): void {
  // Create a temporary element
  const tempElement = document.createElement('div');
  tempElement.style.position = 'absolute';
  tempElement.style.left = '-9999px';

  // Copy the innerHTML from the original element
  tempElement.innerHTML = htmlString;

  // Append the temporary element to the body
  document.body.appendChild(tempElement);

  // Create a range and select the temporary element
  const range = document.createRange();
  range.selectNode(tempElement);

  // Get the selection and add the range to it
  const selection = window.getSelection();

  if (!selection) return;

  selection.removeAllRanges();
  selection.addRange(range);

  // Execute the copy command
  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy command was ' + msg);
  } catch (err: any) {
    window.alert('Oops, unable to copy' + err.message);
  }

  // Remove the selection
  selection.removeAllRanges();

  // Remove the temporary element
  document.body.removeChild(tempElement);
}
