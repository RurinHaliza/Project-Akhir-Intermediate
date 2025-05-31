export default class HomePage {
  async render() {
    return `
      <section class="container">
      <div class="header-container">
        <div class="title-container">
          <h1>Let's create or read story !</h1>
          <p>Every story matters, just like every light in the sky of a million stars.</p>
          <div class="button-container">
            <a id="create-button" href="#/story">Create Story</a>
            <a id="read-button" href="#/list-story">Read Story</a>
          </div>
        </div>
        <div class="card-fan-container">
          <img src="./images/image1.jpeg" alt="Title Image" class="fan-card fan-card-1" />
          <img src="./images/image1.jpeg" alt="Title Image" class="fan-card fan-card-2" />
          <img src="./images/image1.jpeg" alt="Title Image" class="fan-card fan-card-3" />
        </div>
      </div>
        
      </section>
    `;
  }

  async afterRender() {}
}
