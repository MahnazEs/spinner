process.stdout.write('hello from spinner1.js... \rheyyy\n');



function reWrite(action, delay, next) {
  setTimeout(() => {
    process.stdout.write(`${action}`);
    if (next) {
      next();
    }
  }, delay);
};

const action1 = () => {
  reWrite('\r|   ', 100, action2);
};
const action2 = () => {
  reWrite('\r/   ', 300, action3);
};
const action3 = () => {
  reWrite('\r-   ', 500, action4);
};
const action4 = () => {
  reWrite('\r\\   ', 700, action5);
};
const action5 = () => {
  reWrite('\r|   ', 900, action6);
};
const action6 = () => {
  reWrite('\r/   ', 1100, action7);
};
const action7 = () => {
  reWrite('\r-   ', 1300, action8);
};
const action8 = () => {
  reWrite('\r', 1500, null);
};

action1();

