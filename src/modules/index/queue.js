export class Queue {
  constructor() {
    this.taskList = [];
    this.timer = null;
  }

  add(fun) {
    if (this.taskList.length >= 0) {
      clearTimeout(this.timer);
      this.taskList.push(fun);
      this.executing();
    }
  }

  executing() {
    this.timer = setTimeout(() => {
      const task = this.taskList.pop();
      this.taskList = [];
      task();
    }, 500);
  }
}

export default Queue;
