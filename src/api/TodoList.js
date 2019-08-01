const URL = 'https://test.megapolis-it.ru/api/list';

export default class TodoListApi {
  static get() {
    return fetch(URL).then(response => {
      if (!response.ok) {
        //TODO: Exception
      }
      return response.json();
    });
  }
  static create() {}
  static edit() {}
  static delete() {}
}
