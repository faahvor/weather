const key = "CGIZZ4aefvNkdRMcARO7eeBVdjJXgLgE";

const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`;

  const response = await fetch(base);
  const data = await response.json();
  console.log("data[0] :>> ", data[0]);
  return data[0];
};

const getCity = async (city) => {
  const base = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`;
  let locationKey;
  await fetch(base)
    .then((res) => res.json())
    .then((res) => {
      locationKey = res[0].Key;
      console.log(locationKey);
      getWeather(locationKey);
    });
};

getCity("lagos");