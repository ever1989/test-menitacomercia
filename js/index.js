const URL = 'https://jsonplaceholder.typicode.com/';
$app = new Vue({
  el: '#app',
  data: () => ({
    posts = [],
  });
});

getDataPost();

function getDataPost()
{
  const urlPost = URL + 'posts';
  console.log(urlPost);
  return fetch( urlPost )
  .then(response => response.json())
  .then(json => console.log(json))  
} 