class Plugin {
  static instance = null;

  #ctx;

  constructor(ctx) {
    if (Plugin.instance) return Plugin.instance;

    this.#ctx = ctx;
    this.name = "game-mode";

    Plugin.instance = this;
  }

  static getInstance() {
    if (!Plugin.instance) throw new Error("Plugin not initialized");

    return Plugin.instance;
  }

  onLoad() {
    const { TREM } = this.#ctx;
    this.init();
    this.addClickEvent(TREM);
  }

  init() {
    const focusButton = document.querySelector("#focus");
    if (focusButton) {
      const button = document.createElement("div");
      button.id = "gamemode";
      button.className = "nav-bar-location";
      button.title = "啟用 pip 功能";
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M188-240q-44 0-71.5-33.5T97-350l57-297q8-42 40.85-69.5T272-744h416q44.3 0 77.15 27.5Q798-689 806-646l57 297q8 43-20 76t-72 33q-16 0-31-4.5T714-260l-95-76H341l-95 76q-11 11-26.5 15.5T188-240Zm13-76 114-92h330l114 92q1 1 12 5 10 0 16.5-7.5T792-336l-57-297q-3-17-16.5-28T688-672H272q-17 0-30.5 11T225-633l-57 297q-2 10 4 17.5t15 7.5q3 0 14-5Zm458.79-140q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm-72-96q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM481-480Zm-145-36v36q0 10.4 6.8 17.2 6.8 6.8 17.2 6.8 10.4 0 17.2-6.8 6.8-6.8 6.8-17.2v-36h36q10.4 0 17.2-6.8 6.8-6.8 6.8-17.2 0-10.4-6.8-17.2-6.8-6.8-17.2-6.8h-36v-36q0-10.4-6.8-17.2-6.8-6.8-17.2-6.8-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2v36h-36q-10.4 0-17.2 6.8-6.8 6.8-6.8 17.2 0 10.4 6.8 17.2 6.8 6.8 17.2 6.8h36Z"/></svg>`;
      focusButton.insertAdjacentElement("afterend", button);
    }
  }

  addClickEvent(TREM) {
    const button = document.querySelector("#gamemode");
    button.addEventListener("click", () => {
      if (TREM.constant.GAME_MODE) {
        TREM.constant.GAME_MODE = false;
        if (button) {
          button.title = "啟用 pip 功能";
      }
        // logger.info("OFF");
      } else if (!TREM.constant.GAME_MODE) {
        TREM.constant.GAME_MODE = true;
        if (button) {
          button.title = "停用 pip 功能";
        }
        // logger.info("ON");
      }
    });
  }
}

module.exports = Plugin;
