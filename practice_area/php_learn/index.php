<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content=" ">
    <meta name="author" content="Nama Anda">
    <meta name="keywords" content=" ">

    <title>Home</title>

    <link rel="stylesheet" href="assets/css/main.css">
    <script src="assets/js/script.js" defer></script>
</head>

<!--[]=----------------=[] START: BODY []=----------------=[]-->
<body>
    <!--=- START: CONTAINER =--->
    <div class="container">
        <!--=- START: LEFT SIDE =--->
        <button class="toggle-btn offcanvas-btn" onclick="toggleOffCanvas()">☰</button>
        <aside class="left-side" id="offCanvas">
            <section class="header-left-side">
                <img src="https://picsum.photos/100" alt="Logo Masputrawae">
                <h2>Putra Jaya</h2>
            </section>
            <nav>
                <h3>Main Menu</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Notes</a></li>
                    <li><a href="">Recent Change</a></li>
                    <li><a href="">Last Modified</a></li>
                    <li><a href="">Archives</a></li>
                </ul>
                <h3>Other</h3>
                <ul>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Tags</a></li>
                    <li><a href="">History</a></li>
                </ul>
            </nav>
        </aside>

        <!--=- END: LEFT SIDE =--->

        <!--=- START: MAIN CONTAINER =--->
        <div>
            <!--=- START: HEADER =--->
            <header>
                <h1>My Notes</h1>
                <form class="search-bar" action="" method="post">
                    <input type="search" name="search" id="search" placeholder="search">
                    <button type="submit" name="search" >Search</button>
                </form>
                <nav>
                    <section class="nav-tab">
                        <button id="tab-read" onclick="showTab('read')">Read</button>
                        <button id="tab-discussion" onclick="showTab('discussion')">Discussion</button>
                        <button id="tab-history" onclick="showTab('history')">History</button>
                    </section>
                    <ul>
                        <li><a href="">Login</a></li>
                        <li><a href="">Daftar</a></li>
                        <li><a href="">Logout</a></li>
                    </ul>
                </nav>
            </header>
            <!--=- END: HEADER =--->

            <!--=- START: MAIN & TABS =--->
            <main>
                <div class="tabs-content">
                    
                    <article id="readTabs">
                        READ
                    </article>

                    <article id="discussionTabs">
                        Discussion
                    </article>

                    <article id="historyTabs">
                        History
                    </article>

                </div>
            </main>
            <!--=- END: MAIN & TABS =--->

            <!--=- START: FOOTER =--->
            <footer>
                <p>&copy; 2024 - Putra Jaya | My Notes | Semua Hak Cipta Dilindungi</p>
            </footer>
            <!--=- END: FOOTER =--->
        </div>
        <!--=- END: MAIN CONTAINER =--->
    </div>
    <!--=- END: CONTAINER =--->
</body>
<!--[]=----------------=[] END: BODY []=----------------=[]-->
</html>