using System.Web.Optimization;
using Yahoo.Yui.Compressor.Web.Optimization;

namespace Snake
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            var javaScriptCompressorConfig = new JavaScriptCompressorConfig();
            var javaScriptTransform = new YuiCompressorTransform(javaScriptCompressorConfig);

            bundles.Add(new Bundle("~/bundles/jquery", javaScriptTransform).Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new Bundle("~/bundles/snakeGame", javaScriptTransform).IncludeDirectory("~/Scripts/Snake", "*.js"));

            var cssCompressorConfig = new CssCompressorConfig() { RemoveComments = true };
            var cssTransform = new YuiCompressorTransform(cssCompressorConfig);

            bundles.Add(new Bundle("~/Content/css", cssTransform).Include("~/Content/styles/snake.css"));
        }
    }
}