console.log('netlify');

const list = document.getElementById('list');
const fragment = document.createDocumentFragment();

fetch('info.json')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      const li = document.createElement('li');
      li.textContent = `${json[i].name}は${json[i].age}歳です`;
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  });
