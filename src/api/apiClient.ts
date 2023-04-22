import {MainListItem} from '../types/MainListItem';

type ResponseKind = 'success' | 'failure';

type NetworkResponse<T> = {
  kind: ResponseKind;
  body?: T;
};

export const fetchBooksData = async (): Promise<NetworkResponse<MainListItem[]>> => {
  const response = await fetch(
    'https://anapioficeandfire.com/api/characters',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};


export const fetchBookData = async (id: number): Promise<NetworkResponse<MainListItem>> => {
  const response = await fetch(
    `https://anapioficeandfire.com/api/characters/${id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  if (response.ok) {
    const json = await response.json();
    return {
      kind: 'success',
      body: json,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
