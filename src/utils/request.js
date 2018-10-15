const request = (url) => {
  const res = fetch(url).then(res => res.json());
  return res;
}

export default request;
