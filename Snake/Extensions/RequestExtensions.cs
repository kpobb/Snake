using System.Web;

namespace Snake.Extensions
{
    public static class RequestExtensions
    {
        public static bool IsAjaxRequest(this HttpRequest request)
        {
            return !string.IsNullOrWhiteSpace(request.Headers["X-Requested-With"]) && request.Headers["X-Requested-With"] == "XMLHttpRequest";
        }
    }
}