// --- Counter Logic (Domain Layer) ---
class Counter {
  constructor(display) {
    this.value = 0;
    this.display = display;
  }

  updateDisplay() {
    this.display.textContent = this.value;
    document.title = `Clicked ${this.value}`;
    document.body.style.backgroundColor = this.value % 2 ? "pink" : "lightblue";
  }

  increment() {
    this.value++;
    this.updateDisplay();
  }
  decrement() {
    this.value--;
    this.updateDisplay();
  }
  reset() {
    this.value = 0;
    this.updateDisplay();
  }
}

// --- DOM Setup (Presentation Layer) ---
function createCounterUI() {
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="decrement">Decrement</button>
    <button id="reset">Reset</button>
  `;

  return {
    display: document.getElementById("counter"),
    incBtn: document.getElementById("increment"),
    decBtn: document.getElementById("decrement"),
    resetBtn: document.getElementById("reset"),
  };
}

// --- Application Initialization (Composition Root) ---
function setup() {
  const { display, incBtn, decBtn, resetBtn } = createCounterUI();
  const counter = new Counter(display);

  incBtn.addEventListener("click", () => counter.increment());
  decBtn.addEventListener("click", () => counter.decrement());
  resetBtn.addEventListener("click", () => counter.reset());
}

setup();
