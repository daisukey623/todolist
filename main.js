// 【学習できる内容】
// - 配列の操作
// - オブジェクトの操作

// IDカウンター
let i = 0;


// クリックイベント
const show = () =>{
  // 操作するノードを取得する
  const addList = document.getElementById('js-addList');
  const inputTask = document.getElementById('js-inputTask').value;
  
  // 入力したテキストエリアの内容を削除する
  const clearInputText = document.getElementById('js-inputTask').value = '';
  
  // タスクを追加する

// tr追加
  const addLists = document.getElementById('js-addLists');
  const addTr = document.createElement('tr');
  addLists.appendChild(addTr);

  // td追加
    // IDの追加
    const adTdID = document.createElement('td');
    addTr.appendChild(adTdID);
    adTdID.innerHTML = i++;
    
    // コメントの追加
    // const adTd = document.createElement('td');
    const adTdComent = document.createElement('td');
    addTr.appendChild(adTdComent);
    adTdComent.innerHTML = inputTask;

    // 状態の追加
    const adTdstatus = document.createElement('td');
    addTr.appendChild(adTdstatus);
    adTdstatus.innerHTML = '<button>作業中</button>';
    
    // 削除の追加
    const adTdDelete = document.createElement('td');
    addTr.appendChild(adTdDelete);
    adTdDelete.innerHTML = '<button>削除</button>';

} 