import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Javascript promises</h1>`;

const api = "https://jsonplaceholder.typicode.com/users";
const api2 = "http://unknown-api.com/users";

// 1 variation
const foo = async () => {
  const data = await fetch(api)
    .then((res) => res)
    .catch((err) => err);
  return data;
};

// 2 variation
const foo2 = async () => {
  try {
    const data = await fetch(api2);
    console.log("success");
    return [data, null];
  } catch (error) {
    console.log("Failed");
    return [null, error];
  }
};

// destructure the returned promise
async function main() {
  const [data, error] = await foo2();
  console.log(data);
  console.log(error);
}

main();
