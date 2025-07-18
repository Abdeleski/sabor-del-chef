function clearRetell() {
  Object.keys(localStorage).forEach(key => {
    if (key.toLowerCase().includes('retell')) {
      localStorage.removeItem(key);
    }
  });

  Object.keys(sessionStorage).forEach(key => {
    if (key.toLowerCase().includes('retell')) {
      sessionStorage.removeItem(key);
    }
  });

  alert('Conversaciones borradas. Por favor recarga la página.');
}
