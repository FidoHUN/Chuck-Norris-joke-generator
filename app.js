const button = document.getElementById('button');
button.addEventListener('click', getJokes);

function getJokes() {
  const howMany = document.getElementById('input').value;
  const controller = new Controller();

  const result = controller
    .get(`http://api.icndb.com/jokes/random/${howMany}`)
    .then((data) => data)
    .catch((err) => err);

  let output = '';

  result.then((res) => {
    if (res.type === 'success') {
      res.value.forEach((element) => {
        output += `<li>${element.joke}</li>`;
      });
      document.getElementById('jokes').innerHTML = output;
    } else {
      document.getElementById('jokes').innerHTML = 'Something went wrong... :(';
    }
  });
}
