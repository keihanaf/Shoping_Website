// function to fetch data from a JSON file and return it
const fetchData = async () => {
  const res = await fetch("data.json");
  const json = await res.json();
  return json;
};
export { fetchData };
