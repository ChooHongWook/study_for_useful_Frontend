import {users} from '../dummys/users';
import React, {useState, useRef} from 'react';
// import { users } from 'dummys/users';

let test = 'ddds';
let test2 = '3333';

const Home = () => {
  const [render, setRender] = useState(false);
  console.log('랜더링 체크');
  const handle = () => {};
  const nameDataRef = useRef(null);
  return (
    <>
      <h1>관리자페이지</h1>

      <button onClick={() => setRender(!render)}>랜더링</button>

      <div>
        <label htmlFor="input_name">이름</label>
        <input
          type="text"
          id="input_name_kr"
          name="input_name"
          onChange={e => {
            setRender(!render);
          }}
        />
        <input
          type="text"
          id="input_name_en"
          name="input_name"
          onChange={e => {
            setRender(!render);
          }}
        />
        <input
          type="text"
          id="input_name_jas"
          name="input_name"
          onChange={e => {
            setRender(!render);
          }}
        />
      </div>
      <div>
        <label htmlFor="input_url">url</label>
        <input type="text" id="input_url" name="input_url"></input>
      </div>
      <div>
        <label htmlFor="input_year">년</label>
        <input type="text" id="input_year" name="input_year"></input>
      </div>
      <div>
        <label htmlFor="input_month">월</label>
        <input type="text" id="input_month" name="input_month"></input>
      </div>
      <div>
        <label htmlFor="input_date">일</label>
        <input type="text" id="input_date" name="input_date"></input>
      </div>
      <div>
        <label htmlFor="input_image">이미지</label>
        <input type="text" id="input_image" name="input_image"></input>
      </div>
      <div>
        <label htmlFor="input_area">지역</label>
        <input type="file" id="input_area" name="input_area"></input>
      </div>
      <div>
        <label htmlFor="input_actor">출연자</label>
        <input type="select" id="input_actor" name="input_actor"></input>
      </div>
    </>
  );
};

export default Home;
