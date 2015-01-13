using System.Web.Optimization;

namespace Snake
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/snakeGame").IncludeDirectory("~/Scripts/Snake", "*.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/styles/snake.css"));
        }
    }
}