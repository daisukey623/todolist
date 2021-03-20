const todos =[ ]
let index = 0;

// 追加ボタンが押下されたとき
const show = () => {
  const todo = {
    id:'',
    task: '',
    status: '作業中',
    delete:'削除'
  }

  // 1.入力情報を取得、テキストエリアの内容を削除する

  const inputTask = document.getElementById('js-inputTask').value;
  const clearInputText = document.getElementById('js-inputTask').value = '';
  
  // 2.todoのtaskの値に1で取得した入力情報を追加する。
  todo.id = index;
  todo.task = inputTask;
  index++;
  
  // 3.配列todosに2で作成したオブジェクトを追加する
  todos.push(todo);

  // 4.配列の要素をひとつずつHTML部に表示する。
  const getTbody = document.getElementById('js-tbody');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  getTbody.appendChild(tr)

  // id
  const tdId = document.createElement('td');
  tr.appendChild(tdId).innerText = todo.id;
  
  // task
  const tdTask = document.createElement('td');
  tr.appendChild(tdTask).innerText = todo.task;

  // status
  const tdStatus = document.createElement('td');
  const buttonStatus = document.createElement('button');
  tr.appendChild(tdStatus).appendChild(buttonStatus).innerText = todo.status;
  
  // delete
  const tdDelete = document.createElement('td');
  const buttonDelete = document.createElement('button');
  tr.appendChild(tdDelete).appendChild(buttonDelete).innerText = todo.delete;  
}