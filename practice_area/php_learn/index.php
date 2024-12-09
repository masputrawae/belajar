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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
    <script src="assets/js/script.js" defer></script>
</head>

<!--[]=----------------=[] START: BODY []=----------------=[]-->
<body>
    <!--=- START: CONTAINER =--->
    <div class="container">
        
        <!--=- START: SIDEBAR DESKTOP (offcanvas in mobile) =--->
        <aside id="offcanvas" class="offcanvas" aria-hidden="true">
            <section class="header-sidebar">
                <img src="https://picsum.photos/100" alt="Logo Owner">
                <h2>My Notes</h2>
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
                    <li><a href="">History</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Tags</a></li>
                    <li><a href="">Draft</a></li>
                </ul>
                <h3>Info</h3>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </nav>
        </aside>
        <!--=- END: SIDEBAR DESKTOP (offcanvas in mobile) =--->

        <!--=- START: MAIN CONTAINER (header - main -footer) =--->
        <div class="main-container">

            <!--=- START: HEADER =--->
            <header>
                <form class="search-bar-desktop" action="" method="post">
                    <input type="search" name="search" id="search" placeholder="search">
                    <button type="submit" name="search" >Search</button>
                </form>
                <button><i class="bi bi-lightbulb-fill"></i></button>
                <button class="offcanvas-btn" id="toggleOffcanvasBtn" aria-expanded="false" aria-controls="offcanvas"><i class="bi bi-justify-left"></i></button>
            </header>
            <!--=- END: HEADER =--->

            <!--=- START: MAIN =--->
            <main>
                <div class="btn-tabs">
                    <button class="tab-btn" data-tab="read">Read</button>
                    <button class="tab-btn" data-tab="history">History</button>
                    <button class="tab-btn" data-tab="discussion">Discussion</button>
                </div>

                <!-- START: TABS -->
                <div class="tabs">
                    <article class="tab-content tab-read">
                        READ
                    </article>

                    <article class="tab-content tab-history">
                        HISTORY
                    </article>

                    <article class="tab-content tab-discussion">
                        DISCUSSION
                    </article>
                </div>
                <!-- END: TABS -->
            </main>
            <!--=- END: MAIN =--->

            <!--=- START: FOOTER =--->
            <footer>
                <p>&copy; 2024 - Putra Jaya | My Notes : Semua Hak Cipta Dilindungi</p>
            </footer>
            <!--=- END: FOOTER =--->
        </div>
        <!--=- END: MAIN CONTAINER (header - main -footer) =--->
    </div>
    <!--=- END: CONTAINER =--->
</body>
<!--[]=----------------=[] END: BODY []=----------------=[]-->
</html>