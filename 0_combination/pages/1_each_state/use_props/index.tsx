import {users} from '../../../dummys/users';
import React, {useState, useRef} from 'react';
import {useRouter} from 'next/router';

const BlockComponent = (props: any) => {
  const title = props.title || '';
  const type = props.type || 'text';
  let langObj = props.langObj || {
    kr: {
      state: '',
      setState: () => {},
    },
    en: {
      state: '',
      setState: () => {},
    },
    ja: {
      state: '',
      setState: () => {},
    },
  };
  return (
    <>
      <label>{title}</label>
      <br />
      {Object.keys(langObj).map((ele, idx) => {
        return (
          <React.Fragment
            key={`${title}_lang_input_${idx}`}
          >
            <label htmlFor={`input_url_${ele}`}>
              {ele}
            </label>
            <input
              type={type}
              id={`input_url_${ele}`}
              name="input_url"
              value={langObj[ele].state}
              onChange={(event) => {
                langObj[ele].setState(
                  event.target.value,
                );
              }}
            />
          </React.Fragment>
        );
      })}
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
  const nameObj = {
    kr: {
      state: nameKr,
      setState: setNameKr,
    },
    en: {
      state: nameEn,
      setState: setNameEn,
    },
    ja: {
      state: nameJa,
      setState: setNameJa,
    },
  };
  const [actorKr, setActorKr] = useState('');
  const [actorEn, setActorEn] = useState('');
  const [actorJa, setActorJa] = useState('');

  const actorObj = {
    kr: {
      state: actorKr,
      setState: setActorKr,
    },
    en: {
      state: actorEn,
      setState: setActorEn,
    },
    ja: {
      state: actorJa,
      setState: setActorJa,
    },
  };
  const [url, setUrl] = useState('');

  const urlObj = {
    url: {
      state: url,
      setState: setUrl,
    },
  };
  const [year, setYear] = useState<
    number | undefined
  >();
  const [month, setMonth] = useState<
    number | undefined
  >();
  const [date, setDate] = useState<
    number | undefined
  >();
  const dateObj = {
    년: {
      state: year,
      setState: setYear,
    },
    월: {
      state: month,
      setState: setMonth,
    },
    일: {
      state: date,
      setState: setDate,
    },
  };
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
  console.log('test');
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
        <BlockComponent
          title="콘서트 이름"
          langObj={nameObj}
        />
        <br />

        <br />
        <BlockComponent
          title="출연자"
          langObj={actorObj}
          type="number"
        />
        <br />
        <span className="footer">
          출연자가 여러명인경우 ','로 구분해주세요
        </span>
        <br />
        <br />
        <BlockComponent
          title=""
          langObj={urlObj}
        />
        <br />
        {url.slice(0, 4) === 'http' ? null : (
          <span className="footer">
            http 로 시작하십시오
          </span>
        )}
        <br />
        <br />

        <BlockComponent
          title="날짜"
          langObj={dateObj}
          type="number"
        />

        <br />
        <br />
        <div>
          <label htmlFor="input_image">
            이미지
          </label>
          <input
            type="file"
            id="input_image"
            onChange={(e) => {
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
