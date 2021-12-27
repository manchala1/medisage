const api_url =
  "https://python3-dot-parul-arena-2.appspot.com/test?cityname=London";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  show(data);
}
getapi(api_url);
function nodata() {
  <h1>No Data</h1>;
}
function show(data) {
  console.log(data);
  console.log(data.description);
  let date = new Date();
  let old_date = new Date(data.date_and_time);
  console.log(date, old_date);
  date_diff = date - old_date;
  console.log(date_diff);
  let tab = `<tr><th>City</th><th>Description</th><th>Temparature</th><th>Pressure</th><th>Data Age</th><th>Delete</th></tr>`;
  tab += `<tr>
        <td>city name</td>
        <td><input type="text" value="${data.description}"/></td>
        <td>${data.humidity_in_percent}</td>
        <td>${data.pressure_in_hPa}</td>
        <td>${date.diff}</td>
        <td>
          <a href="#">Delete</a>
        </td>
      </tr>`;

  document.getElementById("weather").innerHTML = tab;
}
