// Counter Logic - have I introduced long class... maybe....
class Counter {
  value: number;
  display: HTMLElement | null;
  constructor(display: HTMLElement | null) {
    this.value = 0;
    this.display = display;
  }

  updateDisplay() {
    if (this.display) this.display.textContent = String(this.value);
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

// DOM Setup
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

// Setup reborn
function setup() {
  const { display, incBtn, decBtn, resetBtn } = createCounterUI();
  const counter = new Counter(display);
  if (incBtn) incBtn.addEventListener("click", () => counter.increment());
  if (decBtn) decBtn.addEventListener("click", () => counter.decrement());
  if (resetBtn) resetBtn.addEventListener("click", () => counter.reset());
}

setup();
