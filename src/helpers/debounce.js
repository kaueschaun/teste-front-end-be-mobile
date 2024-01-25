const debounce = (func, delay) => {
    let timeout;
  
    return function (...args) {
      const context = this;
  
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };
  
  export default debounce;