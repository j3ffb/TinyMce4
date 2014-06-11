var mediaPlugins = "";

if (mediaPickerEnabled) {
    mediaPlugins += ",mediapicker";
}

if (mediaLibraryEnabled) {
    mediaPlugins += ",medialibrary";
}

tinyMCE.init({
    selector: "textarea.tinymce",
    theme: "modern",
    schema: "html5",
    plugins: "fullscreen,autoresize,searchreplace,paste,advlist,anchor,autolink,code,table,wordcount,link" + mediaPlugins,
    toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link anchor " + mediaPlugins.substr(1) + " |  code fullscreen",
    convert_urls: false,
    valid_elements: "*[*]",
    // shouldn't be needed due to the valid_elements setting, but TinyMCE would strip script.src without it.
    extended_valid_elements: "script[type|defer|src|language]",
    browser_spellcheck: true,
    contextmenu: false,
    paste_word_valid_elements: "b,strong,i,em,h1,h2,table,th,tr,td"
});
