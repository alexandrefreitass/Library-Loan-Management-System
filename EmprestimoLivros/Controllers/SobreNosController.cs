using Microsoft.AspNetCore.Mvc;

namespace EmprestimoLivros.Controllers
{
    public class SobreNosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
