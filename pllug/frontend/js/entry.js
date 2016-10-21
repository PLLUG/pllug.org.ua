import loadScript from './loader';

window.onload = function windowOnload() {
  const allowedNames = ['blog', 'faq', 'question-form'];
  const entryElems = document.querySelectorAll('[data-entry]');

  entryElems.forEach(entryElem => {
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
  });
};
