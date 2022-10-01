let isError = false;



const getNews = async function () {
    const API_KEY = "78eaa41a147841fba735c16ad17f4b";
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=" + API_KEY;


    try {
        const res = await fetch(url);
        if (!res.ok) {
            // throw new Error(`Something went wrong: ${res.status}`);
            //! throw blougunu kapatacaz kapatmazsak catch bloguna girer 
            isError = true;
        }
        const data = await res.json();
        // burada urlmi çağırıp json haline getir dedim 
        renderNews(data.articles);
        // dom a bastırma işlemi yaptım renderNews adında methot yazdım 

    } catch (error) {
        console.log(error);
    }
};
// buraya kadar cagırdım ☝☝☝


// Burada ekrana bastırma işlemi ni yapmaya başLAYABİLİRİM artık 👇👇
const renderNews = (news) => {
    const newsList = document.getElementById("news-list");
    if (isError) {
        newsList.innerHTML += `
 
 <h2>News Can Not Be Fetched </h2>
 <img src="./img/404.png" alt=".."`;
        return;

        // eğer true ise aşağı inmeden sayfamda hata var diyecek 
    }

    news.forEach((item) => {
        const { title, description, url, urlToImage } = item;
        newsList.innerHTML += `
        <div class= "col-md-6 col-lg-4 col-xl-3">
        <div class="card">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <a href="${url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        `;
    });


}
window.addEventListener("load", getNews);
// buraya kadar 👆👆👆