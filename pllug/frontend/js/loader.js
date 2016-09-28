
export default function loadScript(scriptName) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = `${window.STATIC_URL}/js/${scriptName}.bundle.js`;
  document.querySelector('body').appendChild(script);
};
