const retry = (fn, retriesLeft = 3, interval = 200) => {
  return new Promise((resolve) => {
    let result = null;
    try {
       result = fn();
    } catch (error) {
      console.log('Error', error);
    }

    if (result) {
      resolve(result);
    return;
  }

    setTimeout(() => {
      if (retriesLeft === 1) {
        // reject('maximum retries exceeded');
        resolve();
        return;
      }

      // Passing on "reject" is the important part
      retry(fn, retriesLeft - 1, interval).then(resolve);
    }, interval);
  });
};

function callSetHeight() {
  const main = document.querySelector('#main');
  if (!main) return;

  main.removeAttribute('style');
  const headerHeight = document.querySelector('header').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;
  const mainDivHeight = window.innerHeight - (headerHeight + footerHeight);
  const appHeight = document.querySelector('#app').offsetHeight;
  if (window.innerHeight > appHeight)
    main.style.minHeight = `${mainDivHeight}px`;

  return true;
};

function setMainDivHeight() {
  retry(callSetHeight, 5, 10);
};

export { setMainDivHeight };
