let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let content = document.getElementById("input-content").value;

  let image = document.getElementById("input-image").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    title: title,
    content: content,
    image: image,
    author: "Willy Agustino Efendi",
    postAt: new Date(),
  };

  blogs.push(blog);

  console.log(blogs);

  showBlog();
}

function showBlog() {
  let contentContainer = document.getElementById("contents");

  contentContainer.innerHTML = setBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>

          <div class="content-time">
            <span>
            ${getDistanceTime(blogs[i].postAt)}
            </span>
          </div>

          </div>
        </div>
        
      </div>
    </div>`;
  }
}

function setBlogContent() {
  return `<div id="contents" class="form-blog">
        <!-- dynamic content would be here -->
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="https://images.unsplash.com/photo-1638913662295-9630035ef770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="IMG" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 August 2022 12:30 WIB | Willy Agustino Efendi
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>

            <div class="content-time">
                <span>
                  1 day ago
                </span>
            </div>

          </div>
        </div>
        
      </div>
    </div>`;
}

let month = [
  "January",
  "Februari",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFullTime(time) {
  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;

  //   return fullTime;
}

function getDistanceTime(time) {
  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost;

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDay = 23;

  let seconds = 60;
  let minutes = 60;

  let distanceDay = distance / (milisecond * secondInHours * hoursInDay);
  let distanceHours = Math.floor(distance / (milisecond * seconds * minutes));
  let distanceMinutes = Math.floor(distance / (milisecond * seconds));
  let distanceSeconds = Math.floor(distance / milisecond);

  distanceDay = Math.floor(distanceDay);

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
  } else {
    if (distanceHours >= 1) {
      return `${distanceHours} hours ago`;
    } else {
      if (distanceMinutes >= 1) {
        return `${distanceMinutes} minutes ago`;
      } else {
        return `${distanceSeconds} seconds ago`;
      }
    }
  }
}

setInterval(() => {
  showBlog();
}, 1000);
