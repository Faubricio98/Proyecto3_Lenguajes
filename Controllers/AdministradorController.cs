using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Proyecto3_Lenguajes.Controllers
{
    public class AdministradorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
