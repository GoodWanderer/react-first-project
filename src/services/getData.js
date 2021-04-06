export default class GetData {
  constructor() {
    this._apiBase = 'http://localhost:8000/';
  }

  getResource = async (id) => {
    const res = await fetch(`${this._apiBase}${id}`);
    if (!res.ok) {
      throw new Error(`Could not fetch` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  getAllCarts = async () => {
    return await this.getResource(`carts`);
  }

  getcart = async (id) => {
    return await this.getResource(`carts/${id}`);
  }
  
  putcart = async (id, data) => {
    await fetch(`${this._apiBase}carts/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await this.getResource(`carts`);
  }

  delCart = async (id) => {
    await fetch(`${this._apiBase}carts/${id}`, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
    });
    return await this.getResource(`carts`);
  }

  addCart = async (data) => {
    await fetch(`${this._apiBase}carts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

// var data = new FormData();
// const g = {
//   title: "Заголовок 3",
//   description: "Описание",
//   quantity: 3
// };
// data.append( g );

// const get = new GetData;
// get.addCart(g);