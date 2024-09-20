const array = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Charlie' }
  ];
  
  const map = new Map(array.map(obj => [obj.id, obj]));
  
  console.log(map.get(1));