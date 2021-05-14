const detailContainer = document.querySelector(".container");
// const url = "https://travezy.no/wp-json/wp/v2/media/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function makeApiCall() {
  try {
    const response = await fetch("https://travezy.no/wp-json/wp/v2/media/" + id + `?_embed`);

    const json = await response.json();
    console.log(json);
    detailContainer.innerHTML = "";

    detailContainer.innerHTML = `
    <div class="title-container">
    <h2>${json.title.rendered}</h2>
    <div class="info-container">
    <div class="info posted">
    <i class="fas fa-user-alt"></i>
    <p>Admin</p>
    </div>
    <div class="info date">
    <i class="fas fa-calendar-alt"></i>
    <p>April 26, 2021</p>
    </div>
    <div class="info comment">
    <p>0 Comments</p>
    </div>
    </div>
    </div>
    <div class="img-container">
    <img src="${json.source_url}" alt="${json.alt_text}">
    </div>
    <div class="text-container">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia dolorem voluptates nostrum aliquam nihil nobis cumque, consectetur, praesentium aliquid quis necessitatibus quae perferendis. Explicabo debitis, tenetur quam deserunt maiores atque vel delectus? Consequuntur consectetur rem distinctio. Odit debitis accusamus, error veniam dolor sint possimus quia hic velit ex repellendus consequatur eum adipisci vel illo suscipit reiciendis? Delectus tenetur iusto debitis voluptas odit, nulla ratione voluptates, vel rem sunt distinctio nostrum quisquam? Ea ab nobis libero, dicta ullam et officiis vel dolores repellendus, asperiores obcaecati distinctio architecto consequatur. Suscipit tempora mollitia sunt veritatis nam ex, necessitatibus ullam eum natus neque a ducimus tempore. Velit reprehenderit sed officiis. Laudantium, ab? Beatae molestiae alias rerum exercitationem fugiat nihil, eveniet veritatis, vitae necessitatibus amet, similique sed iste facilis odio praesentium aspernatur. Iusto, ipsum iure? Qui optio, minus aliquid et fuga nihil similique tenetur, voluptatibus ex inventore ipsam suscipit cupiditate iusto sequi saepe, incidunt maiores architecto! Vitae error, rerum ipsam facilis ipsum quod sequi temporibus nulla voluptatem illo soluta voluptas doloremque officia reprehenderit magnam, sunt natus repellat iusto minus molestias tempora distinctio. Fugiat doloribus accusamus, perspiciatis ad, nobis voluptas earum non quibusdam cupiditate molestias autem possimus assumenda quam nisi exercitationem? Deleniti optio magni iusto!</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis voluptatem exercitationem dignissimos sed quibusdam explicabo? Doloribus magni hic dolor obcaecati. Nesciunt saepe facilis perferendis provident nisi. Ab voluptas error voluptatem quis sunt suscipit tempore a distinctio esse quam eligendi aspernatur voluptatibus facilis architecto harum unde deserunt ipsam alias saepe repudiandae, rerum itaque in! Maxime incidunt odio necessitatibus, et voluptatum voluptate ad inventore blanditiis! Laborum id reprehenderit pariatur voluptatum veniam doloremque perspiciatis eius quod eligendi necessitatibus asperiores odit aut laboriosam corporis, eaque nihil quasi ipsam, iure amet expedita magnam maxime sit sapiente animi. Cupiditate accusamus hic facilis dolore dolorem nulla.</p>
    <p class="btn-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque blanditiis similique, aliquid atque nobis ipsa, mollitia dolores placeat nostrum sit vero fugiat consequatur rerum error? Repellat voluptate consectetur veniam, quam magnam libero aut nemo, accusantium voluptas temporibus quasi maxime. Quasi, ipsam sunt maxime sapiente quas impedit ex. Voluptates, optio?</p>
    </div>
    </div>`;

    document.title = json.title.rendered;
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();