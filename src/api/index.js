import axios from 'axios';

// Criei um endpoint aleatório para testar as duas situações | total > R$ 10 ou total < R$ 10
const endpoint = (Math.random() > 0.5)
  ? 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210406T023053Z&X-Amz-Expires=86400&X-Amz-Signature=3e006ca103a3229494be9e8cf6547bf8d4e6c69a7eab6eb08adbc92fc577ca13&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22'
  : 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210406T020018Z&X-Amz-Expires=86400&X-Amz-Signature=17912ec88de6a14fb01b16e4a22a8a56f4dfaaafc9ba8dad9bad8a59757d7c04&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22';

const fetchCart = async () => axios.get(endpoint).catch(() => ({ errorMessage: 'Erro na requisição do carrinho' }));

export default fetchCart;
