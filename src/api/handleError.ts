export const handleError = (error: number) => {
  switch (error) {
    case 400:
      alert('확인 후 다시 시도해주세요.');
      break;
    case 401:
      localStorage.clear();
      if (window.location.pathname !== '/login') {
        window.location.replace('/login');
      }
      break;
    case 404:
      alert('확인 후 다시 시도해주세요.');
      break;
    case 500:
      alert('잠시 후 다시 시도해주세요.');
      break;
    default:
      return alert('잠시 후 다시 시도해주세요.');
  }
};
