var params = {
  lines: [
    {
      background: '#00F',
      updateTime: 4000,
      elements: [
        {
          background: '#00F',
          width: 25
        },
        {
          background: '#ff00ad',
          width: 50
        },
        {
          background: '#73000a',
          width: 15
        }
      ]
    },
    {
      background: '#ffed00',
      updateTime: 12000,
      elements: [
        {
          background: '#23ff34',
          width: 45
        },
        {
          background: '#ffa482',
          width: 15
        }
      ]
    },
    {
      background: '#0424fd',
      updateTime: 5000
    }
  ]
}

// Call render function
render()

// Render (draw) elements
function render() {
  var lines = params.lines
  var linesCount = lines.length
  var lineHeight = (100 / linesCount).toFixed(3)

  lines.forEach(function(line) {
    var lineElDom = createMainLine(line, lineHeight);

    if (line.updateTime) {
      setInterval(function() {
        var bgColor = generateColor();
        lineElDom.style.backgroundColor = bgColor;
      }, line.updateTime);
    }

    if (line.elements) {
      line.elements.forEach(function(lineElement) {
        createLineElement(lineElement, lineHeight, lineElDom);
      })
    }
  })
}

function createMainLine(line, lineHeight) {
  var lineEl = document.createElement('div');

  lineEl.style.backgroundColor = line.background;
  lineEl.style.height = lineHeight + 'vh';
  lineEl.className = ('line');
  document.querySelector('.wrapper').appendChild(lineEl);

  return lineEl;
}

function createLineElement(lineElement, height, lineElDom) {
  var lineEl = document.createElement('div');

  lineEl.style.backgroundColor = lineElement.background;
  lineEl.style.height = height + 'vh';
  lineEl.style.width = lineElement.width + '%';
  lineEl.style.float = 'left';
  lineElDom.appendChild(lineEl);
}

function generateColor() {
  return 'rgb(' + randomBetween0And255() + ', ' + randomBetween0And255() + ', ' + randomBetween0And255() + ')';
}

function randomBetween0And255() {
  var min = 0;
  var max = 255;
  return Math.floor(Math.random() * (max - min)) + min;
}
