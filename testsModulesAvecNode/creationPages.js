function createMenu () {
  let html = '';
  html += '<a href="./homer">Homer</a><br>\n';
  html += '<a href="./doh">D\'OH !!!</a><br>\n';
  html += '<a href="./wouhou">WOUHOU !!!</a><br>\n';

  return html;
}

function createHomer () {
  let html = '';
  html += '<h1>Homer</h1>\n';
  html += '<p><img src="./images/homer_gros.gif" alt="HOMER"></p>\n';

  return html;
}

function createDOH () {
  let html = '';
  html += '<h1>D\'OH !!!</h1>\n';
  html += '<p><img src="./images/doh.jpg" alt="D\'OH"></p>\n';

  return html;
}

function createWOUHOU () {
  let html = '';
  html += '<h1>WOUHOU !!!</h1>\n';
  html += '<p><img src="./images/wouhou.jpg" alt="WOUHOU"></p>\n';

  return html;
}

exports = module.exports = {
  createMenu: createMenu,
  createHomer: createHomer,
  createDOH: createDOH,
  createWOUHOU: createWOUHOU
}
