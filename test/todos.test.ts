import * as  sinon from "sinon";
import { expect } from "chai";
import Todos from "../src/todo";
describe("测试 Todos", () => {
  it("stub", () => {
    let store = {save(){}};
    const todos = new Todos(store);
    // 用 stub 模拟 t.add 函数，stubAdd 函数被模拟为一个空函数
    const stubAdd = sinon.stub(todos, "add").callsFake(() => {console.log(1)});
    // 执行被模拟的 stubAdd 函数，这时候 'eat' 并没有被真正地 push
    stubAdd("eat");
    // 尝试打印，会打印出 []
    todos.print();
    // 我们期望 stubAdd 被执行了一次
    expect(stubAdd.calledOnce).to.be.true;
  });
});