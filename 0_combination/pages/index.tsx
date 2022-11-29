import { users } from '../dummys/users';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const baseURL = 'http://localhost:3001';

const Home = () => {
  return (
    <>
      <ol>
        <li>
          each_state
          <ul>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
            <li>
              <Link
                href={`${baseURL}/1_each_state/use_props`}
              >
                use_props
              </Link>
            </li>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
          </ul>
        </li>
        <li>
          some_state_optimise
          <ul>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
          </ul>
        </li>
        <li>
          all_state_optimise
          <ul>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
            <li>
              <Link
                href={`${baseURL}/1_each_state/no_props`}
              >
                no_props
              </Link>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Home;
