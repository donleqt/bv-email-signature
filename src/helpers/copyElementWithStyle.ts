export function copyElementWithStyle(id: string) {
  // Get the original element
  const originalElement = document.getElementById(id) as HTMLDivElement;

  if (!originalElement) return;

  // Create a temporary element
  const tempElement = document.createElement('div');
  tempElement.style.position = 'absolute';
  tempElement.style.left = '-9999px';

  // Copy the styles from the original element
  tempElement.style.cssText = window.getComputedStyle(originalElement).cssText;

  // Copy the innerHTML from the original element
  tempElement.innerHTML = originalElement.innerHTML;

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
