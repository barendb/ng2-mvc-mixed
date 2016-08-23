using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace holy_grail.Controllers
{
	public class HomeIndexModel
	{
		public string User { get; set; }
	}

	public class HomeController : Controller
	{
		public ActionResult Index()
		{


			return View(new HomeIndexModel { User = "Johnny Bravo"});
		}

		public ActionResult Services()
		{
			return View();
		}
	}
}