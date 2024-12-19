- run jekyll :
```bash
bundle exec jekyll serve --livereload
```


- Looping 
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