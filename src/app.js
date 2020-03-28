import axios from 'axios';
import './app.css';

document.addEventListener('DOMContentLoaded', async () => {
  const res = await axios.get('/api/users');

  document.body.innerHTML = (res.data || [])
    .map(user => `<div>${user.id}: ${user.name}</div>`)
    .join('');
});

if (module.hot) {
  console.log('핫 모듈 켜짐');

  module.hot.accept('./result', () => {
    console.log('result 모듈 변경 됨');
  });
}
