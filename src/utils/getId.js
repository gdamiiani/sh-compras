let lastId = 0;

function getId(prefix = 'id') {
  lastId += 1;
  return `${prefix} ${lastId}`;
}

export default getId;
