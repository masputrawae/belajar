```html
<body>
    <form id="login">
        <input type="text" id="username" placeholder="Masukkan username">
        <input type="password" id="password" placeholder="Masukkan password">
        <button type="submit">Submit</button>
    </form>
    <p id="hasil" style="color: red;"></p>

    <script>
        const formLogin = document.getElementById('login');
        const input = {
        userName: document.getElementById('username'),
        password: document.getElementById('password')
        };
        const hasil = document.getElementById('hasil');

        formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        let errors = [];

        if (input.userName.value.trim() === "") {
            errors.push("Username tidak boleh kosong!");
        }
        if (input.password.value.length < 6) {
            errors.push("Password minimal 6 karakter!");
        }

        if (errors.length > 0) {
            hasil.innerText = errors.join("\n");
        } else {
            hasil.innerText = "";
            alert("Login Berhasil: " + input.userName.value);
        }
        });
    </script>
</body>
```