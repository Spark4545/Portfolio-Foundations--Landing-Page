function scroolToElement(elementSelector, instance = 0){
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth' });
  }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');


link1.addEventListener('click', () => {
  scroolToElement(".header");
});

link2.addEventListener('click', () => {
  scroolToElement(".footer");
});

link3.addEventListener('click', () => {
  scroolToElement("#speedtest");
});

link5.addEventListener('click', () => {
  scroolToElement("#login");
});

document.getElementById('img1').addEventListener('click', function() {
  var info1 = document.getElementById('info-project');
  var info2 = document.getElementById('info-pl');
  var info3 = document.getElementById('info-al');
  if (info1.style.display !== 'block') {
    info1.style.display = 'block';
  }
  info2.style.display = 'none';
  info3.style.display = 'none';
});

document.getElementById('img2').addEventListener('click', function() {
  var info1 = document.getElementById('info-project');
  var info2 = document.getElementById('info-pl');
  var info3 = document.getElementById('info-al');
  if (info2.style.display !== 'block') {
    info2.style.display = 'block';
  }
  info1.style.display = 'none';
  info3.style.display = 'none';
});

document.getElementById('img3').addEventListener('click', function() {
  var info1 = document.getElementById('info-project');
  var info2 = document.getElementById('info-pl');
  var info3 = document.getElementById('info-al');
  if (info3.style.display !== 'block') {
    info3.style.display = 'block';
  }
  info1.style.display = 'none';
  info2.style.display = 'none';
});


document.getElementById('appdownload').addEventListener('click', function() {
  alert('The SDK will soon be downloadable!');
});