interface NewUser {
  username: string;
  signupDate: Date;
}

interface Task {
  status: TaskStatus;
  title: string;
  daysRequired: number;
  assignedTo: NewUser | undefined;
  changeStatus(newStatus: TaskStatus): void;
}

type TaskStatus = "Logged" | "Started" | "InProgress" | "Done";

function assignTask(user: NewUser, task: Task) {
  if (task.assignedTo == undefined) {
    task.assignedTo = user;
    console.log(`User ${user.username} assigned to task '${task.title}'`);
  }
}

let user = {
  username: "Margaret",
  signupDate: new Date(2022, 1, 13),
  passwordHash: "random",
};

let task1: Task = {
  status: "Logged",
  title: "Need assistance",
  daysRequired: 1,
  assignedTo: undefined,
  changeStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  },
};

let task2: Task & { moreProps: number; evenMore: string } = {
  status: "Done",
  title: "Test",
  daysRequired: 12,
  assignedTo: undefined,
  changeStatus(newStatus: TaskStatus) {
    this.status = newStatus;
  },
  moreProps: 300,
  evenMore: "wow",
};

assignTask(user, task1);
assignTask(user, task2);
