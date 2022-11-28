import {users} from '../../../dummys/users';
import React, {useState, useRef} from 'react';
import {useRouter} from 'next/router';

const BlockComponent = (props: any) => {
  let test = {
    kr: {},
    en: {},
    ja: {},
  };
  return (
    <>
      <label>콘서트 이름</label>

      {Object.keys(test).map((e) => {
        return (
          <>
            <label htmlFor={`input_url_${e}`}>
              {e}
            </label>
            <input
              type="text"
              id={`input_url_${e}`}
              name="input_url"
              value={props.value}
              onChange={(e) => {
                props.setVelue(e.target.value);
              }}
            />
          </>
        );
      })}
      <input
        type="text"
        id="input_url"
        name="input_url"
        value={props.value}
        onChange={(e) => {
          props.setVelue(e.target.value);
        }}
      />
    </>
  );
};

const Home = () => {
  console.log('랜더링 확인용');
  const router = useRouter();
  const [user, setUser] = useState<number>(0);
  const [nameKr, setNameKr] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [nameJa, setNameJa] = useState('');
  const [actorKr, setActorKr] = useState('');
  const [actorEn, setActorEn] = useState('');
  const [actorJa, setActorJa] = useState('');
  const [url, setUrl] = useState('');
  const [year, setYear] = useState<
    number | undefined
  >();
  const [month, setMonth] = useState<
    number | undefined
  >();
  const [date, setDate] = useState<
    number | undefined
  >();
  const [location, setLocation] =
    useState('seoul');
  const [imageName, setImageName] =
    useState<any>();
  const [imageSrc, setImageSrc] = useState<any>();
  let submitData = {
    user,
    nameKr,
    nameEn,
    nameJa,
    actorKr: actorKr
      .split(',')
      .map((e) => e.trim()),
    actorEn: actorEn
      .split(',')
      .map((e) => e.trim()),
    actorJa: actorJa
      .split(',')
      .map((e) => e.trim()),
    url,
    year,
    month,
    date,
    location,
    imageName,
  };

  const handle = () => {};
  const handleSubmit = (e) => {
    alert(
      `A name was submitted !!: 
      ${e.target.value}
      ${JSON.stringify(submitData)}  `,
    );
    router.reload();
  };
  const handleSubmitConsole = (e) => {
    console.log('submitData:', submitData);
  };
  const handleAlertInfo = (e) => {
    alert(
      '전송하고싶으면 `년` 정보를 넣어주세요',
    );
  };
  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader?.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  return (
    <>
      <div className="container">
        {/* <form
        onSubmit={() => {
          return false;
        }}
      > */}
        <h1>관리자페이지</h1>
        <br />
        <div>
          수정한 유저
          <select
            id="select_user"
            name="select_user"
            value={user}
            onChange={(e) =>
              setUser(Number(e.target.value))
            }
          >
            {users.map((e, idx) => (
              <option
                key={`editter_option_${idx}`}
                value={e.id}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="input_name_kr">
            콘서트 이름
          </label>
          <br />
          <label htmlFor="input_name_kr">
            kr
          </label>
          <input
            type="text"
            id="input_name_kr"
            name="input_name"
            value={nameKr}
            onChange={(e) => {
              setNameKr(e.target.value);
            }}
          />
          <label htmlFor="input_name_en">
            en
          </label>
          <input
            type="text"
            id="input_name_en"
            name="input_name"
            value={nameEn}
            onChange={(e) => {
              setNameEn(e.target.value);
            }}
          />
          <label htmlFor="input_name_ja">
            ja
          </label>
          <input
            type="text"
            id="input_name_ja"
            name="input_name"
            value={nameJa}
            onChange={(e) => {
              setNameJa(e.target.value);
            }}
          />
        </div>

        <br />

        <div>
          <label htmlFor="input_actor">
            출연자
          </label>
          <br />
          <label htmlFor="input_actor_kr">
            kr
          </label>
          <input
            type="text"
            id="input_actor_kr"
            name="input_actor"
            value={actorKr}
            onChange={(e) => {
              setActorKr(e.target.value);
            }}
          />
          <label htmlFor="input_actor_en">
            en
          </label>
          <input
            type="text"
            id="input_actor_en"
            name="input_actor"
            value={actorEn}
            onChange={(e) => {
              setActorEn(e.target.value);
            }}
          />
          <label htmlFor="input_actor_ja">
            ja
          </label>
          <input
            type="text"
            id="input_actor_ja"
            name="input_actor"
            value={actorJa}
            onChange={(e) => {
              setActorJa(e.target.value);
            }}
          />
          <br />
          <span className="footer">
            출연자가 여러명인경우 ','로
            구분해주세요
          </span>
        </div>

        <br />

        <div>
          <label htmlFor="input_url">url</label>
          <input
            type="text"
            id="input_url"
            name="input_url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          ></input>
          <br />
          {url.slice(0, 4) === 'http' ? null : (
            <span className="footer">
              http 로 시작하십시오
            </span>
          )}
        </div>

        <br />

        <div>
          <label htmlFor="input_year">년</label>
          <input
            type="number"
            id="input_year"
            name="input_year"
            value={year}
            onChange={(e) => {
              setYear(parseInt(e.target.value));
            }}
          ></input>
        </div>

        <br />

        <div>
          <label htmlFor="input_month">월</label>
          <input
            type="number"
            id="input_month"
            name="input_month"
            value={month}
            onChange={(e) => {
              setMonth(parseInt(e.target.value));
            }}
          ></input>
        </div>

        <br />

        <div>
          <label htmlFor="input_date">일</label>
          <input
            type="number"
            id="input_date"
            name="input_date"
            value={date}
            onChange={(e) => {
              setDate(parseInt(e.target.value));
            }}
          ></input>
        </div>

        <br />

        <div>
          <label htmlFor="input_image">
            이미지
          </label>
          <input
            type="file"
            id="input_image"
            onChange={(e) => {
              console.log('target', e.target);
              console.log(
                'target.value',
                e.target.value,
              );
              console.log(
                'target.files[0].name',
                e.target.files &&
                  e.target.files[0].name,
              );
              setImageName(
                e.target.files &&
                  e.target.files[0].name,
              );
              encodeFileToBase64(
                e.target.files &&
                  e.target.files[0],
              );
            }}
          ></input>
          <div className="preview">
            {imageSrc && (
              <img
                src={imageSrc}
                alt="preview-img"
              />
            )}
          </div>
        </div>

        <br />

        <div>
          <label htmlFor="input_area">지역</label>
          <select
            id="select_area"
            name="select_area"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          >
            <option value="seoul">서울</option>
            <option value="busan">부산</option>
            <option value="deagu">대구</option>
            <option value="yeosu">여수</option>
          </select>
        </div>
        <br />
        {/* {true ? ( */}
        {year ? (
          <button
            type="submit"
            onClick={handleSubmit}
          >
            전송
          </button>
        ) : (
          <label
            htmlFor="input_year"
            className="div_button"
            onClick={handleAlertInfo}
          >
            전송하고싶으면 `년` 정보를 넣어주세요
          </label>
        )}
        {/* </form> */}
        <br />
        <button onClick={handleSubmitConsole}>
          전송될 정보를 콘솔에 찍는 버튼
        </button>
      </div>
    </>
  );
};

export default Home;
