export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this._profileName = document.querySelector(profileName)
    this._profileJob = document.querySelector(profileJob)
  }

  getUserInfo() {
    const userInfo = {
      profileName: this._profileName.textContent,
      profileJob: this._profileJob.textContent,
    }
    return userInfo
  }

  setUserInfo({ username, job }) {
    this._profileName.textContent = username
    this._profileJob.textContent = job
  }
}
