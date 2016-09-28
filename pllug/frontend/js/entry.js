import loadScript from './loader';

window.onload = function windowOnload() {
  const allowedNames = ['blog', 'faq'];
  const entryElem = document.querySelector('[data-entry]');
  if(!entryElem) {
    return;
  }
  const entryName = entryElem.getAttribute('data-entry');
  const isAllowed = allowedNames.indexOf(entryName) > -1;
  if(isAllowed) {
    loadScript(entryName);
  } else {
    throw new Error('entry module not found');
  }
};
