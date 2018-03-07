function now() {
  return new Date().getTime();
}

// See: https://progur.com/2017/02/create-mandelbrot-fractal-javascript.html
function checkIfBelongsToMandelbrotSet(x, y) {
  let realComponentOfResult = x;
  let imaginaryComponentOfResult = y;

  for(let i = 0; i < 10; i++) {
    // Calculate the real and imaginary components of the result
    // separately
    let tempRealComponent = realComponentOfResult * realComponentOfResult
      - imaginaryComponentOfResult * imaginaryComponentOfResult
      + x;

    let tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
      + y;

    realComponentOfResult = tempRealComponent;
    imaginaryComponentOfResult = tempImaginaryComponent;
  }

  if (realComponentOfResult * imaginaryComponentOfResult < 5)
    return true; // In the Mandelbrot set

  return false; // Not in the set
}

/**
 * Given a single JS object, this will set up an interval that sets properties on the object
 * to represent x,y location values of a panning and zooming Mandelbrot set over time.
 *
 * NOTE: this is NOT designed to mirror the refresh window of the browser. The goal is to make
 * this asynchronous from the actual browser's refresh so that the framework performance itself
 * is tested in how it responds to changes to the model that are out of sync with the browser.
 *
 * @param model The JS object to set the properties on.
 * @param resolution The resolution (e.g. 10 for a 10x10) of the viewing window.
 * @param interval The interval in milliseconds.
 * @returns {number}
 */
export function runPerformanceTestOnModel(model, resolution, interval, callback) {
  if (model.intervalKey) {
    stopPerformanceTest(model);
  }

  let lastTime = now();
  let startTime = lastTime;

  if (!model.resolution) {
    model.resolution = resolution;
    model.interval = interval;
    model.frame = 0;
  }

  let frame = () => {
    let nextTime = now();
    let totalElapsed = 1000 / (nextTime - startTime);
    let elapsed = 1000 / (nextTime - lastTime);

    let mag = 100 + (totalElapsed / 20);

    for (let x = 0; x < resolution; x++) {
      for (let y = 0; y < resolution; y++) {
        let px = ((x + 50 + totalElapsed)) / mag;
        let py = ((y + 50 + totalElapsed)) / mag;

        let name = `${x}_${y}`;

        model[name] = checkIfBelongsToMandelbrotSet(px, py);
      }
    }

    lastTime = nextTime;

    model.frame++;

    if (callback) {
      callback(elapsed);
    }
  };

  console.log('Start');
  model.intervalKey = setInterval(frame, interval);
}

export function stopPerformanceTest(model) {
  clearInterval(model.intervalKey);

  delete model.intervalKey;
}