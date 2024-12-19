- run jekyll :
```bash
bundle exec jekyll serve --livereload
```


- Looping 
```html
<!-- START : LOOPING ARTICLE -->
<div class="container">
    {% for category in site.categories %}
    <div class="container-card">
        <h3>Nama Kategori: {{ category[0] }}</h3> <!-- Nama kategori -->
        
        {% for post in category[1] %}
        <div class="card-item">
            <h4>{{ post.title }}</h4> <!-- Judul artikel -->
            <a href="{{ post.url | relative_url }}">Read more...</a>
        </div>
        {% endfor %}
        
    </div>
    {% endfor %}
</div>
<!-- END LOOPING ARTICLE -->
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Lingkaran dengan Logo</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        .circle-container {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .circle-links {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .circle-links a {
            position: absolute;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: #3498db;
            color: white;
            font-size: 24px;
            text-decoration: none;
            transition: background-color 0.3s;
        }

        .circle-links a:hover {
            background-color: #2980b9;
        }

        .circle-links a:nth-child(1) {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
        }

        .circle-links a:nth-child(2) {
            transform: rotate(90deg) translateX(80px) rotate(-90deg);
        }

        .circle-links a:nth-child(3) {
            transform: rotate(180deg) translateX(80px) rotate(-180deg);
        }

        .circle-links a:nth-child(4) {
            transform: rotate(270deg) translateX(80px) rotate(-270deg);
        }

        .logo {
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #e74c3c;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
        }
    </style>
</head>
<body>

    <div class="circle-container">
        <!-- Logo di tengah -->
        <div class="logo">
            <i class="fas fa-cogs"></i>
        </div>
        
        <!-- Link-link melingkar -->
        <div class="circle-links">
            <a href="#" class="link1"><i class="fab fa-facebook"></i></a>
            <a href="#" class="link2"><i class="fab fa-twitter"></i></a>
            <a href="#" class="link3"><i class="fab fa-instagram"></i></a>
            <a href="#" class="link4"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>

</body>
</html>

<!--=| Hanya sementara, tidak terkait di atas |=-->
<script>
// Fungsi untuk menampilkan tab yang dipilih dan menyembunyikan yang lain
function showTab(tabName) {
    // Menyembunyikan semua tab
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Menampilkan tab yang dipilih
    const selectedTab = document.getElementById('tab' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Menambahkan event listeners untuk setiap link navigasi
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('linkTabHome');
    const blogLink = document.getElementById('linkTabBlog');
    const portfolioLink = document.getElementById('linkTabPortfolio');
    const aboutLink = document.getElementById('linkTabAbout');

    // Mengatur event listener untuk setiap link
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();  // Menghindari refresh halaman
        showTab('Home');
    });

    blogLink.addEventListener('click', function(event) {
        event.preventDefault();
        showTab('Blog');
    });

    portfolioLink.addEventListener('click', function(event) {
        event.preventDefault();
        showTab('Portfolio');
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showTab('About');
    });
});
</script>
```