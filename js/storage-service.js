class StorageService {
  /**
   * This class is responsible for the access to the local storage
   * @param {*} dbName the database name
   */
  constructor(dbName) {
    this.dbName = dbName;
    if (!localStorage.getItem(dbName)) {
      localStorage.setItem(dbName, '[]');
    }
  }

  /**
   * Check if the id is saved at favorites database
   * @param {number} id the id to be checked
   * @returns
   */
  getFavoriteStatus(id) {
    const favIds = JSON.parse(localStorage.getItem(this.dbName));
    return favIds.indexOf(id) > -1;
  }

  /**
   * Save or remove a id to the favorites database
   * @param {number} id the id to be saved/removed
   * @param {boolean} save true to save or false to remove
   */
  saveOrRemoveId(id, save) {
    let favIds = JSON.parse(localStorage.getItem(this.dbName));
    if (save) {
      if (favIds.indexOf(id) > -1) return;
      favIds.push(id);
    } else {
      favIds = favIds.filter((el) => el !== id);
    }
    localStorage.setItem(this.dbName, JSON.stringify(favIds));
  }
}

export default StorageService;
