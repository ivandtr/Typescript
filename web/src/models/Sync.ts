import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(this.url, data);
    }
  }
}