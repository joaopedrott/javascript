//2622. Cache With Time Limit
var TimeLimitedCache = function() {
  this.cache = {};
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  //duration eh o tempo maximo de duracao em milisegundos
  const now = Date.now();//pega o tempo atual
  const expiryTime = now + duration;//somando o tempo atual com o tempo de duracao temos o tempo de expiracao maximo

  const existingEntry = this.cache[key];// pega o valor e duracao pela chave passada e guarda em existingEntry
  
  // se o valor existir e o tempo de expiracao for maior que o tempo atual(inicial)
  if (existingEntry && existingEntry.expiryTime > now) {
      // Substituir valor e tempo de expiração
      this.cache[key] = { value: value, expiryTime: expiryTime };
      return true;
  } else {// primeiro vai entrar no else
      // Adicionar novo par de chave-valor com tempo de expiração em cache
      this.cache[key] = { value: value, expiryTime: expiryTime };
      return false;
  }
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  const now = Date.now();
  const entry = this.cache[key];

  if (entry && entry.expiryTime > now) {
      return entry.value;
  } else {
      return -1;
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  const now = Date.now();
  let count = 0;

  for (const key in this.cache) {
      if (this.cache[key].expiryTime > now) {
          count++;
      }
  }

  return count;
};

// Exemplo de uso
const timeLimitedCache = new TimeLimitedCache();//cria o objeto
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
setTimeout(() => console.log(timeLimitedCache.get(1)), 1500); // -1 (expirado)
console.log(timeLimitedCache.count()); // Número de chaves não expiradas





/*
//versao com cache otimizado


var TimeLimitedCache = function() {
  this.cache = new Map();
};


TimeLimitedCache.prototype.set = function(key, value, duration) {//id valor e duracao
  const now = Date.now();
  const expiryTime = now + duration;

  const existingEntry = this.cache.get(key);
  if (existingEntry && existingEntry.expiryTime > now) {
      // Substituir valor e tempo de expiração
      this.cache.set(key, { value: value, expiryTime: expiryTime });
      return true;
  } else {
      // Adicionar novo par de chave-valor com tempo de expiração
      this.cache.set(key, { value: value, expiryTime: expiryTime });
      return false;
  }
};


TimeLimitedCache.prototype.get = function(key) {
  const now = Date.now();
  const entry = this.cache.get(key);

  if (entry && entry.expiryTime > now) {
      return entry.value;
  } else {
      return -1;
  }
};


TimeLimitedCache.prototype.count = function() {
  const now = Date.now();
  let count = 0;

  this.cache.forEach((entry) => {
      if (entry.expiryTime > now) {
          count++;
      }
  });

  return count;
};

// Exemplo de uso
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
setTimeout(() => console.log(timeLimitedCache.get(1)), 1500); // -1 (expirado)
console.log(timeLimitedCache.count()); // Retorna o número de chaves não expiradas


*/