onload = () => {
    const c = setTimeout(() => {
      document.getElementById.remove("not-loaded");
      clearTimeout(c);
    }, 50);
  };