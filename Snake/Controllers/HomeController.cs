using System.Web.Mvc;

namespace Snake.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult TrollingContent()
        {
            var path = HttpContext.Server.MapPath(@"~\Content\TrollingContent.json");
            var data = System.IO.File.ReadAllText(path);

            return new JsonResult { Data = data, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}