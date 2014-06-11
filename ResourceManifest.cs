using Orchard.UI.Resources;

namespace TinyMce4 {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();
            manifest.DefineScript("JQueryTinyMce").SetUrl("jquery.tinymce.min.js", "jquery.tinymce.min.js").SetDependencies("jQuery");
            manifest.DefineScript("TinyMce").SetUrl("tinymce.min.js", "tinymce.jquery.js").SetDependencies("JQueryTinyMce");
            manifest.DefineScript("OrchardTinyMce").SetUrl("orchard-tinymce.js").SetDependencies("TinyMce");
        }
    }
}
