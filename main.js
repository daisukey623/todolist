const todos = [];

// ラジオボタン状態の取得
const radioList = document.getElementById('formRadio').radioStatus;

// 追加ボタンが押下されたとき
const show = () => {
  const todo = {
    id: '',
    task: '',
    status: '作業中',
    delete: '削除',
  };

  // 1.入力情報を取得、テキストエリアの内容を削除する
  const inputTask = document.getElementById('js-inputTask').value;
  const clearInputText = (document.getElementById('js-inputTask').value = '');

  // 2.todoのtaskの値に1で取得した入力情報を追加する。
  todo.id = todos.length;
  todo.task = inputTask;

  // 3.配列todosに2で作成したオブジェクトを追加する
  todos.push(todo);

  // 4.配列の要素をひとつずつHTML部に表示する。
  const getTbody = document.getElementById('js-tbody');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  if (radioList[2].checked) {
    getTbody.appendChild(tr).style.display = 'none';
  } else {
    getTbody.appendChild(tr);
  }

  // id
  const tdId = document.createElement('td');
  tr.appendChild(tdId).innerText = todo.id;
  tdId.classList.add('js-id');

  // task
  const tdTask = document.createElement('td');
  tr.appendChild(tdTask).innerText = todo.task;

  // status
  const tdStatus = document.createElement('td');
  const buttonStatus = document.createElement('button');
  tr.appendChild(tdStatus).appendChild(buttonStatus).innerText = todo.status;
  buttonStatus.classList.add('status', 'work');

  // delete
  const tdDelete = document.createElement('td');
  const buttonDelete = document.createElement('button');
  tr.appendChild(tdDelete).appendChild(buttonDelete).innerText = todo.delete;
  buttonDelete.classList.add('delete');

  deleteButton();
  statusButton();
  radioButton();
};

// 削除ボタンクリック後、タスク削除
const deleteButton = () => {
  const getDelete = document.getElementsByClassName('delete');
  for (let i = 0; i < getDelete.length; i++) {
    getDelete[i].addEventListener('click', deleteClick, false);
  }
};

const deleteClick = (e) => {
  e.preventDefault();

  // クリックされた削除対象のインデックスを取得
  const deleteIndex = document.querySelectorAll('.delete');
  const deleteTargetIndex = Array.prototype.indexOf.call(deleteIndex, e.target);

  // 要素の削除
  const deleteTarget = e.target.closest('tr');
  deleteTarget.remove();

  // 配列の削除
  todos.splice(deleteTargetIndex, 1);

  const resetId = document.querySelectorAll('.js-id');
  // 配列の更新（id）,HTMLに反映
  for (let index = 0; index < todos.length; index++) {
    todos[index].id = index;
    resetId[index].innerHTML = index;
  }
};

// 作業中ボタンクリック後、ステータス変更
//
const statusButton = () => {
  const getStatus = document.getElementsByClassName('status');
  for (let i = 0; i < getStatus.length; i++) {
    getStatus[i].addEventListener('click', statusClick, false);
  }
};

const statusClick = (e) => {
  e.preventDefault();

  // 要素の変更（作業中 ⇆ 完了）
  const statusTarget = e.target;
  // console.log(statusTarget.textContent)
  if (statusTarget.innerText === '作業中') {
    statusTarget.innerText = '完了';
    statusTarget.classList.add('done');
    statusTarget.classList.remove('work');
  } else {
    statusTarget.innerText = '作業中';
    statusTarget.classList.add('work');
    statusTarget.classList.remove('done');
  }
  radioClick();
};

const radioButton = () => {
  const getRdio = document.getElementById('formRadio').radioStatus;
  for (let i = 0; i < getRdio.length; i++) {
    getRdio[i].addEventListener('click', radioClick, false);
  }
};

// ラジオボタンを押すと表示切り替え
const radioClick = () => {
  const getStatus = document.getElementsByClassName('status');
  const getClassWork = document.getElementsByClassName('work');
  const getClassDone = document.getElementsByClassName('done');

  if (radioList[0].checked) {
    console.log('すべてを選択中');
    AllSwitch();
  } else if (radioList[1].checked) {
    console.log('作業中を選択中');
    DoneSwitch();
  } else if (radioList[2].checked) {
    console.log('完了を選択中');
    WorkSwitch();
  }
};

// 『すべて』を選択時、該当タスクを表示
const AllSwitch = () => {
  const getClassDone = document.getElementsByClassName('done');
  const getClassWork = document.getElementsByClassName('work');
  for (let i = 0; i < getClassWork.length; i++) {
    getClassWork[i].closest('tr').style.display = 'table-row';
  }
  for (let i = 0; i < getClassDone.length; i++) {
    getClassDone[i].closest('tr').style.display = 'table-row';
  }
};

// 『作業中』を選択時、該当タスクのみ表示
const WorkSwitch = () => {
  const getClassDone = document.getElementsByClassName('done');
  const getClassWork = document.getElementsByClassName('work');
  for (let i = 0; i < getClassWork.length; i++) {
    getClassWork[i].closest('tr').style.display = 'none';
  }
  for (let i = 0; i < getClassDone.length; i++) {
    getClassDone[i].closest('tr').style.display = 'table-row';
  }
};

// 『完了』を選択時、該当タスクのみ表示
const DoneSwitch = () => {
  const getClassDone = document.getElementsByClassName('done');
  const getClassWork = document.getElementsByClassName('work');
  for (let i = 0; i < getClassDone.length; i++) {
    getClassDone[i].closest('tr').style.display = 'none';
  }
  for (let i = 0; i < getClassWork.length; i++) {
    getClassWork[i].closest('tr').style.display = 'table-row';
  }
};
