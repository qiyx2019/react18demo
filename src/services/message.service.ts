import { Subject } from "rxjs";

interface Tsubject {
  text?: string;
  userId?:number;
  msg?:Array<any>;
}
const subject:Subject<Tsubject> = new Subject();

export const messageService = {
  sendMessage: (message) => subject.next({ ...message }),
  clearMessages: () => subject.next({}),
  onMessage: () => subject.asObservable(),
};
