export function fetchList() {
  return fetch(
    "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
      "a" +
      "&ts=1&apikey=3e8159f9102a91676ab9339a3b0e7135&hash=6126f0add6159a284067d294bbd98c92&limit=100"
  );
}
