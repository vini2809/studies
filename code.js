function createAlbum() {
    const album_grid = document.getElementsByClassName("albums-grid").item(0);
    
    const p_album_name = document.createElement("p");
    p_album_name.className = "album-name";
    p_album_name.textContent = "In Rainbows";

    const p_album_band = document.createElement("p");
    p_album_band.className = "album-band";
    p_album_band.textContent = "Radiohead (2007)";

    const div_album_info = document.createElement("div");
    div_album_info.className = "album_info";
    div_album_info.appendChild(p_album_name);
    div_album_info.appendChild(p_album_band);

    const img_album_cover = document.createElement("img");
    img_album_cover.className = "album-cover";
    img_album_cover.src = "https://upload.wikimedia.org/wikipedia/pt/9/96/Radiohead_-_In_Rainbows.jpg";
    img_album_cover.title = "In Rainbows";

    const div_album_description = document.createElement("div");
    div_album_description.className = "album-description";

    const p_album_genre = document.createElement("p");
    p_album_genre.textContent = "Art Rock, Experimental";
    
    div_album_description.appendChild(p_album_genre);

    const div_album = document.createElement("div");
    div_album.className = "album";

    div_album.appendChild(div_album_info);
    div_album.appendChild(img_album_cover);
    div_album.appendChild(div_album_description);

    album_grid.appendChild(div_album);
}

function removeAlbum() {
    const album = document.getElementsByClassName("album").item(0);
    album.remove();
}

