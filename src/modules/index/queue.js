export class Queue {
  constructor() {
    this.taskList = [];
  }

  add(f1, f2) {
    this.taskList.push(
      new Promise((resolve, reject) => {
        const task = () => {};
      })
    );
  }
}
