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
  tdId.classList.add('js-id');
  
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
  buttonDelete.classList.add('delete');
  index++;
  
  deleteClick();
}

const deleteClick = () => {
  const getDelete = document.getElementsByClassName('delete');
  for (let i = 0; i < getDelete.length; i++) {
    getDelete[i].addEventListener('click', deleteClickFunction, false);
  }
}

    const deleteClickFunction = (e) => {
        e.preventDefault();
        console.log('削除クリック')
    
        // クリックされた削除対象のインデックスを取得
        const deleteIndex = document.querySelectorAll(".delete");
        const deleteTargetIndex= Array.prototype.indexOf.call(deleteIndex,e.target);
       
        // 要素の削除
        const deleteTarget = e.target.closest('tr');
        deleteTarget.remove()
    
        // 配列の削除
        todos.splice(deleteTargetIndex,1);
        
        const resetId = document.querySelectorAll(".js-id");
        // 配列の更新（id）,HTMLに反映
        for(let index = 0; index < todos.length;index++) {
          todos[index].id = index;      
          resetId[index].innerHTML = index;
        }

        console.log(todos)
    }

  

 



// const deleteIndex = document.querySelectorAll(".delete");
// Array.from(deleteIndex, e => {
// e.addEventListener("click", e => {
// alert(Array.prototype.indexOf.call(deleteIndex,e.target));
// });
// });


// function chooseItem(event) {
//   var ul = event.target.parentNode;
//   var li = ul.querySelectorAll("li");
//   console.log(Array.prototype.indexOf.call(li, event.target));
// }
  




