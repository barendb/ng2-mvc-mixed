using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace holy_grail.Controllers
{
	public class Column
	{
		public int Value { get; set; }
	}

	public class Row
	{
		public List<Column> Columns { get; set; }
	}

	public class ExampleModel
	{
		public List<Row> Rows { get; set; }
	}


	public class PartialsController : Controller
	{
		public ActionResult Example()
		{
			var rand = new Random((int)DateTime.Now.Ticks);
			var model = new ExampleModel();

			model.Rows = new List<Row>();
			for (int i = 0; i < 20; i++)
			{
				var row = new Row();
				row.Columns = new List<Column>();

				for (int j = 0; j < 20; j++)
				{
					
					var column = new Column();
					column.Value = rand.Next(1, 1000); 
					row.Columns.Add(column);
				}

				model.Rows.Add(row);
			}

			return PartialView("~/Views/Partials/_Example.cshtml", model);
		}
	}
}