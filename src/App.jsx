import { useState } from "react";

import "./App.css";

function App() {
  const records = [
    { title: "勉強の記録1", time: 1 },
    { title: "勉強の記録2", time: 3 },
    { title: "勉強の記録3", time: 5 },
  ];
  const [inputTime,setInputTime] = useState("");
  const [studyTime, setStudyTime] = useState(0);

  const handleInputTime = (e) => {
    setInputTime(e.target.value)
  }

  const handleClick = (time) => {
    // recordsオブジェクトをこぴーして、配列に追加することが必要となりそう
    setStudyTime(studyTime+Number(time))
  }


  return (
    <>
      <div>
        <p>学習内容</p>
        <input type="text" />
      </div>
      <div>
        <p>学習時間</p>
        <input onChange={handleInputTime} value={inputTime}/>
        <span>時間</span>
      </div>
      <div>
        <p>登録されている学習記録：</p>
        {records.map((record, index) => (
          <div key={index}>
            <p>
              タイトル: {record.title} - 時間: {record.time}時間
            </p>
          </div>
        ))}
      </div>
      <p>
        入力されている時間：<span></span>時間
      </p>
      <button type="submit" onClick={() => handleClick(inputTime)}>登録</button>
      <p>入力されていない項目があります</p>
      <p>
        合計時間：<span>{studyTime}</span> / 1000(h)
      </p>
    </>
  );
}

export default App;
