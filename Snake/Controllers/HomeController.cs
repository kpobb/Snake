using System.Web.Mvc;
using Snake.Components;

namespace Snake.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult TrollingContent()
        {
            if (!Request.IsAjaxRequest())
            {
                return RedirectToAction("Index");
            }

            var path = HttpContext.Server.MapPath(@"~\Content\TrollingContent.json");
            var data = System.IO.File.ReadAllText(path);

            return new JsonResult { Data = CustomEncoder.Encode(data), JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}